import React from "react";
import { Reveal } from "./Reveal";

interface InvestmentItem {
  label: string;
  price: string;
}

const InvestmentTable = ({ title, items, note }: { title: string; items: InvestmentItem[]; note?: string }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-[clamp(13px,1.6vw,26px)] font-black text-forest tracking-tight leading-none text-center mb-[clamp(20px,3.5vw,52px)] max-[767px]:text-[15px] max-[767px]:mb-6">
      {title}
    </h3>

    <div className="flex flex-col flex-1 gap-[clamp(2px,0.5vw,8px)] max-[767px]:gap-1">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`flex items-baseline justify-between gap-2 rounded-lg px-[clamp(8px,1.2vw,20px)] py-[clamp(10px,1.1vw,17px)] max-[767px]:px-2 max-[767px]:py-3 ${
            idx % 2 === 0 ? "bg-forest/[0.035]" : "bg-transparent"
          }`}
        >
          <span className="text-[clamp(10px,1.05vw,15px)] font-medium tracking-[0.08em] text-ink/75 uppercase whitespace-nowrap overflow-hidden text-ellipsis max-[767px]:text-[13px] max-[767px]:tracking-[0.02em]">
            {item.label}
          </span>
          <span className="text-[clamp(12px,1.35vw,21px)] font-black text-forest tabular-nums whitespace-nowrap text-right max-[767px]:text-[14px]">
            {item.price}
          </span>
        </div>
      ))}
    </div>

    {note && (
      <div className="mt-[clamp(16px,2vw,32px)] flex justify-center max-[767px]:mt-4">
        <p className="text-[clamp(8px,0.85vw,12px)] font-bold tracking-[0.24em] text-forest/40 uppercase max-[767px]:text-[10px] max-[767px]:tracking-[0.1em]">
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
    <section className="pt-[clamp(48px,7vw,120px)] pb-[clamp(80px,10vw,160px)] bg-bone overflow-hidden">
      <div className="mx-auto w-full max-w-[1340px] px-[clamp(12px,4vw,72px)] max-[767px]:px-3">
        <Reveal>
          <div className="text-center mb-[clamp(40px,7vw,110px)] max-[767px]:mb-8">
            <h2 className="text-[clamp(44px,6.5vw,88px)] font-black text-forest tracking-tighter leading-[0.95]">
              Investimentos
            </h2>
            <div className="mx-auto mt-[clamp(14px,2vw,28px)] h-[1px] w-[clamp(60px,10vw,160px)] bg-forest/20" />
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-x-[clamp(8px,3vw,72px)] relative max-[767px]:gap-x-2">
          <div className="pointer-events-none absolute left-[33.33%] top-0 bottom-[clamp(8px,2vw,24px)] w-[1px] bg-gradient-to-b from-transparent via-forest/12 to-transparent" />
          <div className="pointer-events-none absolute left-[66.66%] top-0 bottom-[clamp(8px,2vw,24px)] w-[1px] bg-gradient-to-b from-transparent via-forest/12 to-transparent" />

          <Reveal delay={100} className="h-full">
            <InvestmentTable title="Contrate 1 vez" items={data.oneTime} />
          </Reveal>

          <Reveal delay={200} className="h-full">
            <InvestmentTable title="Com recorrência" items={data.recurring} note="(Mínimo 3 meses)" />
          </Reveal>

          <Reveal delay={300} className="h-full">
            <InvestmentTable title="Adicionais" items={data.additional} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
