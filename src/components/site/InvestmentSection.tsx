import React from "react";
import { Reveal } from "./Reveal";

interface InvestmentItem {
  label: string;
  price: string;
}

const InvestmentTable = ({ title, items, note }: { title: string; items: InvestmentItem[]; note?: string }) => (
  <div className="flex flex-col h-full overflow-hidden">
    <h3 className="text-[14px] sm:text-[clamp(11px,2.5vw,22px)] font-black text-forest mb-5 sm:mb-[clamp(16px,4vw,40px)] tracking-normal sm:tracking-tight uppercase leading-[1.15] text-center break-words">
      {title}
    </h3>
    <div className="flex flex-col flex-1 relative">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-1 px-1 py-3 sm:flex sm:justify-between sm:px-[clamp(6px,2vw,24px)] sm:py-[clamp(8px,1.2vw,18px)] rounded-xl mb-1 transition-colors ${
            idx % 2 === 0 ? 'bg-forest/[0.04]' : 'bg-transparent'
          }`}
        >
          <span className="min-w-0 text-[12px] sm:text-[clamp(10px,1.8vw,16px)] font-semibold sm:font-medium tracking-normal sm:tracking-[0.05em] text-ink uppercase leading-tight break-words sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis sm:mr-1">
            {item.label}
          </span>
          <span className="shrink-0 text-[13px] sm:text-[clamp(11px,2.2vw,22px)] font-black sm:font-bold text-forest tabular-nums whitespace-nowrap text-right tracking-normal">
            {item.price}
          </span>
        </div>
      ))}
    </div>
    {note && (
      <div className="mt-6 flex justify-center max-[767px]:mt-4">
        <p className="text-[12px] sm:text-[clamp(8px,1.5vw,14px)] font-bold tracking-normal sm:tracking-[0.2em] text-forest/60 sm:text-forest/50 uppercase text-center">
          {note}
        </p>
      </div>
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
    <section className="pt-8 pb-16 sm:pt-6 sm:pb-20 bg-bone overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-2.5 sm:px-[clamp(8px,3vw,48px)]">
        <Reveal>
          <h2 className="text-[clamp(30px,7vw,34px)] sm:text-[clamp(42px,6vw,72px)] font-black text-forest mb-10 sm:mb-[clamp(24px,8vw,96px)] text-center tracking-tighter leading-none">
            Investimentos
          </h2>
        </Reveal>
        
        <div className="grid grid-cols-3 gap-x-1 sm:gap-x-[clamp(2px,1.5vw,48px)] relative">
          {/* Vertical dividers */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-forest/5" />
          <div className="absolute left-[66.66%] top-0 bottom-0 w-[1px] bg-forest/5" />

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
