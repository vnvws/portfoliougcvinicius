import React from "react";
import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

interface Step {
  number: string;
  title: string;
  description: string;
  bullets?: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description: "Fase de alinhamento para compreender os objetivos da marca e mapear as melhores estratégias de conteúdo para entregar resultados reais.",
  },
  {
    number: "02",
    title: "Formalização",
    description: "Trâmite contratual ágil e descomplicado:",
    bullets: [
      "Disponibilização de contrato padrão para assinatura eletrônica.",
      "Preenchimento exclusivo com as informações jurídicas da contratante.",
    ],
  },
  {
    number: "03",
    title: "Planejamento criativo",
    description: "Definição da linha narrativa da campanha:",
    bullets: [
      "Elaboração de roteiros personalizados seguindo as diretrizes da marca.",
      "Flexibilidade para trabalhar com briefing próprio da empresa ou aprovação do material desenvolvido por mim.",
    ],
  },
  {
    number: "04",
    title: "Execução e cronograma",
    description: "Ciclo completo de entrega em até 5 dias úteis:",
    bullets: [
      "Criação de roteiro → Validação → Captação e Edição → Revisões finais → Envio via Google Drive.",
    ],
  },
  {
    number: "05",
    title: "Condições comerciais",
    description: "",
    bullets: [
      "Pagamento: Pagamento do valor integral realizado no ato da entrega final dos conteúdos.",
      "Fiscal: Nota fiscal emitida imediatamente após a confirmação do pagamento.",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-[clamp(16px,4vw,48px)] bg-bone relative overflow-hidden md:px-[clamp(16px,4vw,48px)] max-[767px]:px-4">
      <div className="mx-auto w-full max-w-[1240px]">
        <Reveal>
          <h2 className="text-[clamp(42px,6vw,72px)] font-black text-forest mb-[clamp(40px,8vw,80px)] text-center tracking-tighter leading-none">
            Processo Criativo
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-4xl max-[767px]:max-w-full">
          {/* Vertical line connector */}
          <div className="absolute left-[19px] top-[10px] bottom-[10px] w-[2px] bg-forest/10 sm:left-1/2 sm:-ml-[1px] max-[767px]:left-[21px]" />

          <div className="space-y-[clamp(40px,8vw,80px)] max-[767px]:space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <Reveal 
                  key={step.number} 
                  delay={idx * 100}
                  className={`relative flex flex-col sm:flex-row items-start ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  {/* Step Marker */}
                  <div className="absolute left-0 sm:left-1/2 top-0 flex h-10 w-10 max-[767px]:h-11 max-[767px]:w-11 -translate-x-0 sm:-translate-x-1/2 items-center justify-center rounded-full border-2 border-forest bg-bone z-10 transition-colors group">
                    <Check size={16} className="text-forest sm:group-hover:text-neon transition-colors max-[767px]:w-[18px] max-[767px]:h-[18px]" strokeWidth={3} />
                  </div>

                  {/* Content Container */}
                  <div className={`w-full sm:w-[45%] pl-14 max-[767px]:pl-16 sm:pl-0 ${isEven ? 'sm:pl-12 text-left' : 'sm:pr-12 sm:text-right'}`}>
                    <div className="flex flex-col">
                      <div className={`flex items-baseline gap-3 mb-3 max-[767px]:mb-4 ${isEven ? 'justify-start' : 'justify-start sm:justify-end'}`}>
                        <span className="text-[clamp(10px,1.5vw,12px)] font-bold tracking-[0.2em] text-forest/30 tabular-nums max-[767px]:text-[13px] max-[767px]:tracking-[0.1em]">
                          {step.number}
                        </span>
                        <h3 className="text-[clamp(20px,2.5vw,28px)] font-bold text-forest leading-tight tracking-tight max-[767px]:text-[22px] max-[767px]:tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                      
                      {step.description && (
                        <p className="text-[clamp(15px,1.8vw,17px)] leading-[1.6] text-ink/80 font-normal mb-4 max-[767px]:text-[16px] max-[767px]:leading-[1.6] max-[767px]:mb-5">
                          {step.description}
                        </p>
                      )}
                      
                      {step.bullets && (
                        <ul className={`space-y-3 max-[767px]:space-y-4 ${isEven ? 'text-left' : 'text-left sm:text-right'}`}>
                          {step.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className={`flex items-start gap-3 text-[clamp(14px,1.6vw,15px)] leading-[1.5] text-ink/70 max-[767px]:text-[15px] max-[767px]:leading-[1.5] ${isEven ? 'justify-start' : 'justify-start sm:justify-end'}`}>
                              {/* Left alignment logic for desktop */}
                              {!isEven && (
                                <span className="hidden sm:block flex-1">{bullet}</span>
                              )}
                              
                              <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-neon mt-2 max-[767px]:mt-[9px]" />
                              
                              {/* Right/Mobile alignment logic */}
                              <span className={`flex-1 ${!isEven ? 'sm:hidden' : ''}`}>
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


