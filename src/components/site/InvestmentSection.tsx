import React from "react";
import { Reveal } from "./Reveal";

const InvestmentTable = ({ title, items }: { title: string; items: { label: string; price: string }[] }) => (
  <div className="flex-1 min-w-[320px] bg-white rounded-[32px] p-8 border border-forest/10 transition-shadow">
    <h3 className="text-2xl font-black text-ink mb-8 text-center tracking-tight border-b border-forest/5 pb-4">{title}</h3>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center px-4 py-4 rounded-xl border border-transparent hover:border-neon/30 hover:bg-neon/5 transition-all group">
          <span className="text-[16px] font-bold tracking-tight text-forest group-hover:text-ink transition-colors">{item.label}</span>
          <span className="text-[18px] font-black text-ink bg-bone px-3 py-1 rounded-lg group-hover:bg-neon group-hover:text-ink transition-all">{item.price}</span>
        </div>
      ))}
    </div>
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
      { label: "(Mínimo 3 meses)", price: "---" },
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
    <section className="py-32 px-12 bg-bone">
      <div className="mx-auto w-[1240px]">
        <Reveal>
          <h2 className="text-[72px] font-black text-ink mb-20 text-center tracking-tighter leading-none">
            Investimentos
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-10 justify-center items-start">
          <Reveal delay={100} className="flex-1">
            <InvestmentTable title="Contrate 1 vez" items={data.oneTime} />
          </Reveal>
          <Reveal delay={200} className="flex-1">
            <InvestmentTable title="Com recorrência" items={data.recurring} />
          </Reveal>
          <Reveal delay={300} className="flex-1">
            <InvestmentTable title="Adicionais" items={data.additional} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
