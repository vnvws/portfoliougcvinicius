import React from "react";
import { Check, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const PackageCard = ({
  title,
  subtitle,
  items,
  price,
  note,
  isBestValue,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  items: string[];
  price: string;
  note?: string;
  isBestValue?: boolean;
  delay?: number;
}) => (
  <Reveal delay={delay} className="flex-1 min-w-[360px]">
    <div
      className={`group relative flex flex-col rounded-[42px] overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
        isBestValue 
          ? "bg-forest text-white ring-4 ring-neon/30" 
          : "bg-white border border-forest/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)]"
      }`}
    >
      {/* Header Area */}
      <div className={`pt-10 pb-6 text-center ${isBestValue ? "bg-white/5" : "bg-forest/[0.03]"}`}>
        <div className={`mx-auto mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1 text-[10px] font-black tracking-[0.2em] ${
          isBestValue ? "bg-neon text-ink" : "bg-forest/10 text-forest"
        }`}>
          {isBestValue && <Star size={10} fill="currentColor" />}
          {title}
        </div>
        <h3 className={`text-4xl font-black tracking-tight mb-2 ${isBestValue ? "text-white" : "text-ink"}`}>
          {subtitle}
        </h3>
        {note && (
          <span className={`text-[11px] font-black tracking-widest px-3 py-1 rounded-full ${
            isBestValue ? "bg-neon/20 text-neon" : "bg-forest text-white"
          }`}>
            {note}
          </span>
        )}
      </div>
      
      {/* Content Area */}
      <div className="flex-1 p-10 space-y-8">
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 text-[16px] font-bold">
              <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                isBestValue ? "bg-neon text-ink" : "bg-forest/10 text-forest"
              }`}>
                <Check size={14} strokeWidth={3} />
              </div>
              <span className={isBestValue ? "text-white/90" : "text-forest/80"}>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className={`rounded-3xl p-6 transition-all ${
          isBestValue ? "bg-white/10" : "bg-bone"
        }`}>
          <div className="flex flex-col items-center">
            <span className={`text-[10px] font-black tracking-[0.2em] mb-1 ${
              isBestValue ? "text-white/40" : "text-forest/40"
            }`}>INVESTIMENTO</span>
            <div className="flex items-baseline gap-1">
              <span className={`text-sm font-black ${isBestValue ? "text-neon" : "text-forest"}`}>R$</span>
              <span className={`text-5xl font-black tracking-tighter ${isBestValue ? "text-white" : "text-ink"}`}>
                {price}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Meta */}
      <div className={`px-10 py-6 text-center text-[10px] font-bold tracking-widest border-t ${
        isBestValue ? "border-white/10 text-white/40" : "border-forest/5 text-forest/40"
      }`}>
        DIREITO DE USO EM ADS POR 06 MESES
      </div>

      {isBestValue && (
        <div className="absolute -right-12 top-8 rotate-45 bg-neon px-12 py-1 text-[10px] font-black tracking-[0.2em] text-ink shadow-xl">
          MAIS VENDIDO
        </div>
      )}
    </div>
  </Reveal>
);

export default function PackageSection() {
  return (
    <section className="py-32 px-12 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-neon/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-forest/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto w-[1240px] relative z-10">
        <Reveal>
          <div className="mb-4 text-center">
            <span className="text-[11px] font-black tracking-[0.4em] text-neon">ESCOLHA SEU PLANO</span>
          </div>
          <h2 className="text-[72px] font-black text-ink mb-20 text-center tracking-tighter leading-none">
            Pacotes de Conteúdo
          </h2>
        </Reveal>

        <div className="flex flex-wrap gap-10 justify-center items-stretch">
          <PackageCard
            title="START"
            subtitle="1 Vídeo"
            items={["Roteiro Estratégico", "Gravação em 4K", "Edição Dinâmica", "Teste A/B de Hook"]}
            price="427"
            delay={100}
          />
          <PackageCard
            title="RECOMENDADO"
            subtitle="3 Vídeos"
            items={["Roteiro Estratégico", "Gravação em 4K", "Edição Dinâmica", "Consultoria de Gancho"]}
            price="750"
            note="ECONOMIZE R$ 621"
            isBestValue
            delay={200}
          />
          <PackageCard
            title="PREMIUM"
            subtitle="5 Vídeos"
            items={["Roteiro Estratégico", "Gravação em 4K", "Edição Dinâmica", "3 Fotos de Produto"]}
            price="1.440"
            note="ECONOMIZE R$ 945"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}
