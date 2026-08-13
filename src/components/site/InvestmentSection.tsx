import React from "react";
import { Reveal } from "./Reveal";

interface InvestmentItem {
  label: string;
  price: string;
}

const InvestmentTable = ({ title, items, note }: { title: string; items: InvestmentItem[]; note?: string }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-[clamp(14px,2vw,24px)] font-black text-forest mb-[clamp(12px,4vw,32px)] tracking-tight uppercase leading-none whitespace-nowrap">
      {title}
    </h3>
    <div className="flex flex-col flex-1 border-t border-forest/10 relative">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className={`flex justify-between items-center px-[clamp(4px,1.5vw,16px)] py-[clamp(8px,1.2vw,14px)] transition-colors ${
            idx % 2 === 0 ? 'bg-forest/[0.03]' : 'bg-transparent'
          }`}
        >
          <span className="text-[clamp(9px,1.2vw,14px)] font-medium tracking-[clamp(0.02em,0.1vw,0.08em)] text-ink uppercase whitespace-nowrap overflow-hidden text-ellipsis mr-2">
            {item.label.split('').map((char, i) => (
              <span key={i} className="inline-block" style={{ marginRight: '0.1em' }}>{char}</span>
            ))}
          </span>
          <span className="text-[clamp(11px,1.5vw,22px)] font-bold text-forest tabular-nums whitespace-nowrap text-right">
            {item.price}
          </span>
        </div>
      ))}
    </div>
    {note && (
      <p className="mt-[clamp(8px,1vw,16px)] text-[clamp(8px,1vw,12px)] font-bold tracking-widest text-forest/40 uppercase">
        {note}
      </p>
    )}
  </div>
);

export default function InvestmentSection() {
  const data = {
    oneTime: [
      { label: "1 VÍDEO", price: "R$357" },
      { label: "2 VÍDEOS", price: "R$600" },
      { label: "3 VÍDEOS", price: "R$800" },
      { label: "4 VÍDEOS", price: "R$960" },
      { label: "8 VÍDEOS", price: "R$1.920" },
      { label: "10 VÍDEOS", price: "R$2.400" },
      { label: "12 VÍDEOS", price: "R$2.850" },
    ],
    recurring: [
      { label: "4 VÍDEOS", price: "R$880" },
      { label: "6 VÍDEOS", price: "R$1.320" },
      { label: "8 VÍDEOS", price: "R$1.680" },
      { label: "10 VÍDEOS", price: "R$2.000" },
      { label: "15 VÍDEOS", price: "R$3.000" },
      { label: "20 VÍDEOS", price: "R$4.000" },
    ],
    additional: [
      { label: "TESTE AB", price: "R$70" },
      { label: "3 FOTOS", price: "R$100" },
      { label: "+90 DIAS ADS", price: "R$100" },
      { label: "+ COLAB", price: "R$100" },
      { label: "3 STORIES", price: "R$230" },
      { label: "3 STORIES UGC", price: "R$180" },
      { label: "REPOST TIKTOK", price: "R$100" },
    ],
  };

  return (
    <section className="pt-12 pb-32 bg-bone overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-[clamp(12px,4vw,48px)]">
        <Reveal>
          <h2 className="text-[clamp(42px,6vw,72px)] font-black text-forest mb-[clamp(32px,8vw,96px)] text-center tracking-tighter leading-none uppercase">
            Investimentos
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-3 gap-x-[clamp(4px,2vw,48px)] relative">
          {/* Vertical dividers */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-forest/10" />
          <div className="absolute left-[66.66%] top-0 bottom-0 w-[1px] bg-forest/10" />

          <Reveal delay={100} className="h-full">
            <InvestmentTable title="CONTRATE 1 VEZ" items={data.oneTime} />
          </Reveal>
          
          <Reveal delay={200} className="h-full">
            <InvestmentTable 
              title="COM RECORRÊNCIA" 
              items={data.recurring} 
              note="(MÍNIMO 3 MESES)"
            />
          </Reveal>
          
          <Reveal delay={300} className="h-full">
            <InvestmentTable title="ADICIONAIS" items={data.additional} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
