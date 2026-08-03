import React from "react";

const InvestmentTable = ({ title, items }: { title: string; items: { label: string; price: string }[] }) => (
  <div className="flex-1 min-w-[280px]">
    <h3 className="text-xl font-bold text-ink mb-6 text-center uppercase tracking-wider">{title}</h3>
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center bg-forest/5 px-4 py-3 rounded-sm border-b border-forest/10 hover:bg-forest/10 transition-colors">
          <span className="text-sm font-medium uppercase tracking-wide text-ink">{item.label}</span>
          <span className="text-sm font-bold text-ink">{item.price}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function InvestmentSection() {
  const data = {
    oneTime: [
      { label: "1 VÍDEO", price: "R$ 357" },
      { label: "2 VÍDEOS", price: "R$ 600" },
      { label: "3 VÍDEOS", price: "R$ 800" },
      { label: "4 VÍDEOS", price: "R$ 960" },
      { label: "8 VÍDEOS", price: "R$ 1.920" },
      { label: "10 VÍDEOS", price: "R$ 2.400" },
      { label: "12 VÍDEOS", price: "R$ 2.850" },
    ],
    recurring: [
      { label: "4 VÍDEOS", price: "R$ 880" },
      { label: "6 VÍDEOS", price: "R$ 1.320" },
      { label: "8 VÍDEOS", price: "R$ 1.680" },
      { label: "10 VÍDEOS", price: "R$ 2.000" },
      { label: "15 VÍDEOS", price: "R$ 3.000" },
      { label: "20 VÍDEOS", price: "R$ 4.000" },
      { label: "(MÍNIMO 3 MESES)", price: "" },
    ],
    additional: [
      { label: "TESTE AB", price: "R$ 70" },
      { label: "3 FOTOS", price: "R$ 100" },
      { label: "+90 DIAS ADS", price: "R$ 100" },
      { label: "+ COLAB", price: "R$ 100" },
      { label: "3 STORIES", price: "R$ 230" },
      { label: "3 STORIES UGC", price: "R$ 180" },
      { label: "REPOST TTOK", price: "R$ 100" },
    ],
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-ink mb-16 text-center uppercase tracking-tighter">Investimentos</h2>
      <div className="flex flex-wrap gap-8 justify-center items-start">
        <InvestmentTable title="Contrate 1 vez" items={data.oneTime} />
        <InvestmentTable title="Com recorrência" items={data.recurring} />
        <InvestmentTable title="Adicionais" items={data.additional} />
      </div>
    </section>
  );
}
