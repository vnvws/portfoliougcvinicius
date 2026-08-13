import React from "react";
import { Reveal } from "./Reveal";

interface InvestmentItem {
  label: string;
  price: string;
}

const InvestmentTable = ({ title, items, note }: { title: string; items: InvestmentItem[]; note?: string }) => (
  <div className="flex-1 min-w-[300px] flex flex-col">
    <h3 className="text-[28px] font-black text-forest mb-10 tracking-tight uppercase leading-none">
      {title}
    </h3>
    <div className="flex flex-col border-t border-forest/10">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className={`flex justify-between items-center px-4 py-3.5 transition-colors ${
            idx % 2 === 0 ? 'bg-forest/[0.03]' : 'bg-transparent'
          }`}
        >
          <span className="text-[14px] font-medium tracking-[0.08em] text-forest uppercase">
            {item.label}
          </span>
          <span className="text-[18px] font-black text-ink tabular-nums">
            {item.price === "---" ? "" : item.price}
          </span>
        </div>
      ))}
    </div>
    {note && (
      <p className="mt-4 text-[12px] font-bold tracking-widest text-forest uppercase">
        {note}
      </p>
    )}
  </div>
);

export default function InvestmentSection() {
  const data = {
    oneTime: [
      { label: "1 Vídeo", price: "R$ 357" },
      { label: "2 Vídeos", price: "R$ 600" },
      { label: "3 Vídeos", price: "R$ 800" },
      { label: "4 Vídeos", price: "R$ 960" },
      { label: "8 Vídeos", price: "R$ 1.920" },
      { label: "10 Vídeos", price: "R$ 2.400" },
      { label: "12 Vídeos", price: "R$ 2.850" },
    ],
    recurring: [
      { label: "4 Vídeos", price: "R$ 880" },
      { label: "6 Vídeos", price: "R$ 1.320" },
      { label: "8 Vídeos", price: "R$ 1.680" },
      { label: "10 Vídeos", price: "R$ 2.000" },
      { label: "15 Vídeos", price: "R$ 3.000" },
      { label: "20 Vídeos", price: "R$ 4.000" },
    ],
    additional: [
      { label: "Teste AB", price: "R$ 70" },
      { label: "3 Fotos", price: "R$ 100" },
      { label: "+90 Dias Ads", price: "R$ 100" },
      { label: "+ Colab", price: "R$ 100" },
      { label: "3 Stories", price: "R$ 230" },
      { label: "3 Stories UGC", price: "R$ 180" },
      { label: "Repost Tiktok", price: "R$ 100" },
    ],
  };

  return (
    <section className="pt-12 pb-32 px-12 bg-bone">
      <div className="mx-auto w-[1240px]">
        <Reveal>
          <h2 className="text-[72px] font-black text-ink mb-24 text-center tracking-tighter leading-none uppercase">
            Investimentos
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Vertical dividers (Desktop only) */}
          <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-forest/10" />
          <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-forest/10" />

          <Reveal delay={100}>
            <div className="md:pr-6">
              <InvestmentTable title="Contrate 1 vez" items={data.oneTime} />
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="md:px-6">
              <InvestmentTable 
                title="Com recorrência" 
                items={data.recurring} 
                note="(Mínimo 3 meses)"
              />
            </div>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="md:pl-6">
              <InvestmentTable title="Adicionais" items={data.additional} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
