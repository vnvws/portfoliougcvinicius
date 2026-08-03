import React from "react";
import { Check } from "lucide-react";

const PackageCard = ({
  title,
  subtitle,
  items,
  price,
  note,
  isBestValue,
}: {
  title: string;
  subtitle: string;
  items: string[];
  price: string;
  note?: string;
  isBestValue?: boolean;
}) => (
  <div
    className={`relative flex flex-col w-[350px] rounded-[32px] overflow-hidden ${
      isBestValue ? "border-2 border-neon bg-forest/80" : "bg-white border-2 border-forest/10"
    }`}
  >
    <div className={`py-6 text-center ${isBestValue ? "bg-forest text-white" : "bg-forest/10 text-forest"}`}>
      <h3 className="text-2xl font-black uppercase tracking-tight">{title}</h3>
    </div>
    
    <div className="flex-1 p-8 text-center space-y-4">
      <h4 className={`text-2xl font-bold uppercase ${isBestValue ? "text-white" : "text-forest"}`}>{subtitle}</h4>
      <div className={`h-[1px] w-full my-4 ${isBestValue ? "bg-white/20" : "bg-forest/10"}`} />
      <ul className={`space-y-3 ${isBestValue ? "text-white/90" : "text-forest/80"}`}>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 justify-center font-medium">
            <Check size={18} className={isBestValue ? "text-neon" : "text-forest"} />
            {item}
          </li>
        ))}
      </ul>
      <p className={`text-[12px] italic pt-4 ${isBestValue ? "text-white/60" : "text-forest/60"}`}>Direito de uso em ADS<br/>por 06 meses</p>
    </div>

    <div className="px-8 pb-8">
      <div className="bg-white rounded-full py-4 text-center shadow-xl border-t-4 border-forest">
        <span className="text-sm font-bold text-forest">R$</span>
        <span className="text-4xl font-black text-forest ml-1">{price}</span>
      </div>
      {note && (
        <p className={`text-center font-bold text-[14px] mt-3 ${isBestValue ? "text-neon" : "text-forest"}`}>
          {note}
        </p>
      )}
    </div>

    {isBestValue && (
      <div className="absolute top-4 -right-4">
        <div className="bg-neon text-ink font-black text-[12px] px-6 py-2 -rotate-12 rounded-full uppercase tracking-wider shadow-lg z-50">
          Best Choice
        </div>
      </div>
    )}
  </div>
);

export default function PackageSection() {
  return (
    <section className="py-32 px-6 bg-forest/5">
      <h2 className="text-4xl md:text-5xl font-black text-forest mb-20 text-center uppercase tracking-tighter">Pacotes</h2>
      <div className="flex flex-wrap gap-8 justify-center items-center">
        <PackageCard
          title="UGC 1"
          subtitle="1 VÍDEO"
          items={["Roteiro", "Gravação", "Edição", "Teste A/B"]}
          price="427,00"
        />
        <PackageCard
          title="UGC 2"
          subtitle="3 VÍDEOS"
          items={["Roteiro", "Gravação", "Edição"]}
          price="750,00"
          note="ECONOMIZE R$ 621"
          isBestValue
        />
        <PackageCard
          title="UGC 3"
          subtitle="5 VÍDEOS"
          items={["Roteiro", "Gravação", "Edição", "3 FOTOS"]}
          price="1.440,00"
          note="ECONOMIZE R$ 945"
        />
      </div>
    </section>
  );
}
