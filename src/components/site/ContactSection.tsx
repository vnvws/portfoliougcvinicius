import { useState } from "react";
import { Reveal } from "./Reveal";
import { Mail, Instagram, Phone, Send, Star } from "lucide-react";
import { submitProposal } from "./contact.functions";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";

export default function ContactSection() {
  const submitFn = useServerFn(submitProposal);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      whatsapp: formData.get("whatsapp") as string,
      budget: formData.get("budget") as string,
      message: formData.get("message") as string,
    };

    try {
      await submitFn({ data });
      toast.success("Proposta enviada com sucesso! Voltaremos em até 24h.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Erro ao enviar proposta. Tente novamente.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="pt-14 sm:pt-20 pb-12 px-4 sm:px-8 lg:px-12 bg-bone">
      <div className="mx-auto w-full max-w-[1240px] rounded-[20px] sm:rounded-[32px] border border-forest/10 bg-white/50 p-5 sm:p-10 lg:p-16 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <Reveal>
              <div className="mb-6 sm:mb-8 flex items-center gap-2 text-[12px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.4em] text-neon">
                <Star size={14} fill="currentColor" />
                CONTATO
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display text-[clamp(30px,7vw,34px)] sm:text-[clamp(36px,6vw,64px)] leading-[1.1] font-bold text-ink mb-4 sm:mb-6">
                Vamos dar início a <span className="italic text-neon">sua próxima campanha</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-[16px] sm:text-[18px] text-forest/70 mb-8 sm:mb-12 max-w-[400px]">
                conta o que sua marca precisa — eu volto em até 24h úteis
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-auto">
              <div className="overflow-hidden rounded-2xl border border-forest/10 bg-forest/[0.03]">
                <ContactRow
                  label="WHATSAPP"
                  value="(11) 97839-3658"
                  href="https://api.whatsapp.com/message/RRN5XSTCXBCBK1?autoload=1&app_absent=0"
                />
                <ContactRow
                  label="EMAIL"
                  value="comercial.viniciusugc@gmail.com"
                  href="mailto:comercial.viniciusugc@gmail.com"
                />
                <ContactRow
                  label="INSTAGRAM"
                  value="@_oviniciusaraujo"
                  href="https://www.instagram.com/_oviniciusaraujo/"
                />
                <ContactRow
                  label="TIKTOK"
                  value="@viniviews_"
                  href="https://www.tiktok.com/@viniviews_"
                  last
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column */}
          <Reveal delay={400}>
            <div className="rounded-2xl sm:rounded-3xl border border-forest/10 bg-white p-6 sm:p-8 lg:p-10 shadow-2xl transition-transform hover:scale-[1.01]">
              <h3 className="font-display text-[26px] sm:text-[32px] font-bold text-ink mb-6 sm:mb-8">
                solicitar proposta
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <label className="text-[12px] sm:text-[10px] font-bold tracking-wide sm:tracking-widest text-forest/60">Nome (Obrigatório)</label>
                  <input
                    required
                    name="name"
                    placeholder="seu nome"
                    className="w-full rounded-xl border border-forest/10 bg-bone/30 px-4 sm:px-5 py-3.5 sm:py-4 text-ink placeholder:text-forest/30 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all text-[16px] sm:text-[15px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[12px] sm:text-[10px] font-bold tracking-wide sm:tracking-widest text-forest/60">Empresa (Opcional)</label>
                    <input
                      name="company"
                      placeholder="nome da marca"
                      className="w-full rounded-xl border border-forest/10 bg-bone/30 px-4 sm:px-5 py-3.5 sm:py-4 text-ink placeholder:text-forest/30 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all text-[16px] sm:text-[15px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] sm:text-[10px] font-bold tracking-wide sm:tracking-widest text-forest/60">Email (Obrigatório)</label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="email@empresa.com"
                      className="w-full rounded-xl border border-forest/10 bg-bone/30 px-4 sm:px-5 py-3.5 sm:py-4 text-ink placeholder:text-forest/30 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all text-[16px] sm:text-[15px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[12px] sm:text-[10px] font-bold tracking-wide sm:tracking-widest text-forest/60">WhatsApp (Opcional)</label>
                    <input
                      name="whatsapp"
                      placeholder="(11) 99999-9999"
                      className="w-full rounded-xl border border-forest/10 bg-bone/30 px-4 sm:px-5 py-3.5 sm:py-4 text-ink placeholder:text-forest/30 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all text-[16px] sm:text-[15px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] sm:text-[10px] font-bold tracking-wide sm:tracking-widest text-forest/60">Orçamento (Opcional)</label>
                    <select
                      name="budget"
                      className="w-full rounded-xl border border-forest/10 bg-bone/30 px-4 sm:px-5 py-3.5 sm:py-4 text-ink focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all appearance-none cursor-pointer text-[16px] sm:text-[15px]"
                    >
                      <option value="prefere não dizer">prefere não dizer</option>
                      <option value="até R$500">até R$500</option>
                      <option value="R$500–1500">R$500–1500</option>
                      <option value="acima de R$1500">acima de R$1500</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] sm:text-[10px] font-bold tracking-wide sm:tracking-widest text-forest/60">Mensagem (Obrigatório)</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="objetivo da campanha, prazo, referências"
                    className="w-full rounded-xl border border-forest/10 bg-bone/30 px-4 sm:px-5 py-3.5 sm:py-4 text-ink placeholder:text-forest/30 focus:border-neon focus:ring-1 focus:ring-neon outline-none transition-all resize-none text-[16px] sm:text-[15px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl bg-neon py-4 sm:py-5 text-[14px] font-bold tracking-[0.12em] sm:tracking-[0.2em] text-ink transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  style={{
                    boxShadow: "0 4px 0 0 oklch(0.75 0.25 135)"
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Enviando..." : "Solicitar Proposta"}
                    {!isSubmitting && <Send size={16} />}
                  </span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href, last = false }: { label: string; value: string; href?: string; last?: boolean }) {
  const valueContent = href ? (
    <a
      href={href}
      className="min-w-0 text-[13px] sm:text-[14px] font-bold text-ink text-right break-all transition-colors hover:text-neon"
    >
      {value}
    </a>
  ) : (
    <span className="text-[13px] sm:text-[14px] font-bold text-ink text-right break-all">{value}</span>
  );

  return (
    <div className={`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 p-4 sm:flex sm:justify-between sm:p-5 ${!last ? 'border-b border-forest/5' : ''}`}>
      <span className="text-[12px] sm:text-[10px] font-bold tracking-wider sm:tracking-widest text-forest/50">{label}</span>
      {valueContent}
    </div>
  );
}
