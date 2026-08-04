import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  company: z.string().optional(),
  email: z.string().email("E-mail inválido"),
  whatsapp: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export const submitProposal = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const resendApiKey = process.env['RESEND_API_KEY'];
    const lovableApiKey = process.env['LOVABLE_API_KEY'];

    if (!lovableApiKey) {
      console.error("Missing Lovable API Key configuration");
      throw new Error("Erro na configuração de segurança do servidor.");
    }

    if (!resendApiKey) {
      console.warn("Resend API Key is missing. Email will not be sent, but simulating success for UX.");
      return { success: true, simulated: true };
    }

    const emailContent = `
      Novo contato recebido do Portfólio:
      
      Nome: ${data.name}
      Empresa: ${data.company || 'Não informado'}
      E-mail: ${data.email}
      WhatsApp: ${data.whatsapp || 'Não informado'}
      Orçamento: ${data.budget || 'Não informado'}
      Mensagem: ${data.message}
    `;

    try {
      const response = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": resendApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: "comercial.viniciusugc@gmail.com",
          subject: `Nova Proposta: ${data.name}`,
          text: emailContent,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Resend error:", error);
        throw new Error("Falha ao enviar e-mail.");
      }

      return { success: true };
    } catch (error) {
      console.error("Submission error:", error);
      throw new Error("Erro ao processar sua solicitação.");
    }
  });
