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
    // In a real scenario, this would use a Resend integration or similar.
    // For now, we'll simulate the process and log the data.
    console.log("Proposal received:", data);
    
    // We would use an Edge Function with Resend here if configured.
    // Since we're in TanStack Start, we could also use a library like 'resend' 
    // directly if the API key was available in process.env.
    
    // For this implementation, we'll assume the client-side will handle 
    // the feedback since the actual email sending setup (Resend + Edge Function)
    // requires external API keys and configuration beyond just the code.
    
    return { success: true };
  });
