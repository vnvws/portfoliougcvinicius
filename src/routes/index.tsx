import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, Play, CheckCircle2 } from "lucide-react";
import { FixedScale } from "@/components/site/FixedScale";
import { NeonCursor } from "@/components/site/NeonCursor";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { NicheSection } from "@/components/site/NicheSection";
import { Reveal } from "@/components/site/Reveal";
import { niches } from "@/components/site/niches";
import { BackToTop } from "@/components/site/BackToTop";
import mainCollageAsset from "@/assets/main-collage.png.asset.json";
import processAsset from "@/assets/processo/processo-criativo.png.asset.json";
import viniciusPhotoAsset from "@/assets/vinicius-photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinícius Araújo — UGC Creator | Portfólio" },
      {
        name: "description",
        content:
          "UGC Creator: vídeos verticais 9:16 para marcas de tech, moda, apps, alimentos, autocuidado e viagens. Veja o portfólio completo por nicho.",
      },
      { property: "og:title", content: "Vinícius Araújo — UGC Creator | Portfólio" },
      {
        property: "og:description",
        content: "Reels, TikToks e Stories que fazem marca virar conversa. Portfólio por nicho.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <NeonCursor />
      <FixedScale>
        <main className="grain relative w-full overflow-hidden bg-bone font-sans text-ink">
          <Nav />
          <Hero />
          <About />
          <section className="relative pt-12">
            <div className="mx-auto w-[1240px] pb-6">
              <p className="font-sans text-[11px] font-bold tracking-[0.32em] text-forest uppercase opacity-80">
                Marcas que já confiaram
              </p>
            </div>
            <BrandMarquee />
          </section>

          <div className="mx-auto flex w-[1240px] flex-col gap-16 pt-24 pb-32">
            {niches.map((niche, i) => (
              <NicheSection key={niche.id} niche={niche} index={i} />
            ))}
          </div>

          <CreativeProcess />

          <Contact />
        </main>
      </FixedScale>
      <BackToTop />
    </>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-[1240px] items-center justify-between pt-4">
      <span className="font-display text-[18px] font-extrabold tracking-[-0.02em] uppercase text-ink">
        Vinícius<span style={{ color: "var(--color-neon)" }}>.</span>Araújo
      </span>
      <nav className="flex items-center gap-6 text-[10px] tracking-[0.15em] text-forest uppercase">
        {niches.map((niche) => (
          <a
            key={niche.id}
            data-cursor="link"
            className="cursor-none transition-colors hover:text-ink"
            href={`#${niche.id}`}
          >
            {niche.title}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto w-[1240px] pt-4 pb-24">
      <div
        className="pointer-events-none absolute top-24 left-[-80px] h-[420px] w-[620px] rounded-full blur-[110px]"
        style={{
          background: "color-mix(in oklab, var(--color-neon) 30%, transparent)",
          animation: "glow-pulse 5s ease-in-out infinite",
        }}
      />
      <div className="relative flex items-end gap-14">
        <div className="relative z-10 flex-1">
          <span className="font-sans text-[12px] tracking-[0.34em] text-forest uppercase">
            UGC CREATOR MASCULINO - SÃO PAULO, BRASIL
          </span>
          <h1 className="mt-8 font-display text-[136px] leading-[0.82] font-black tracking-[-0.055em] uppercase">
            Vinícius
            <br />
            <span
              style={{
                color: "var(--color-forest)",
                textShadow:
                  "0 0 34px color-mix(in oklab, var(--color-neon) 45%, transparent), 0 0 4px color-mix(in oklab, var(--color-neon) 60%, transparent)",
              }}
            >
              Araújo
            </span>
          </h1>
        </div>

        <div className="relative w-[288px] shrink-0">
          <div
            className="relative overflow-hidden rounded-[22px] bg-ink"
            style={{
              aspectRatio: "9 / 16",
              border: "2px solid var(--color-neon)",
              boxShadow: "0 0 60px -12px color-mix(in oklab, var(--color-neon) 75%, transparent)",
              transform: "rotate(3deg)",
            }}
          >
            <img 
              src={viniciusPhotoAsset.url} 
              alt="Vinícius Araújo"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
            />
            <div className="grain absolute inset-0 opacity-40 pointer-events-none" />
            <div className="absolute inset-x-4 top-2 flex items-center gap-1.5 z-10">
              <span
                className="h-1 flex-1 rounded-full"
                style={{ background: "var(--color-neon)" }}
              />
              <span className="h-1 flex-1 rounded-full bg-white/30" />
              <span className="h-1 flex-1 rounded-full bg-white/30" />
            </div>
          </div>
          <span
            className="absolute -bottom-5 -left-8 -rotate-3 rounded-full px-4 py-1.5 font-sans text-[11px] tracking-[0.2em] uppercase"
            style={{ backgroundColor: "var(--color-ink)", color: "var(--color-neon)" }}
          >
            Reels · TikTok · Stories
          </span>
        </div>
      </div>
      <div className="mt-20 flex flex-wrap items-center justify-between gap-y-4 border-t border-forest/10 pt-8">
        {niches.map((niche) => (
          <a
            key={niche.id}
            data-cursor="link"
            className="flex cursor-none items-center gap-2 font-display text-[15px] font-bold tracking-tight uppercase transition-colors hover:text-forest"
            href={`#${niche.id}`}
            style={{ color: "var(--color-ink)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-neon)" }} />
            {niche.title}
            <ArrowUpRight size={14} className="opacity-40" />
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto w-[1240px] pb-24">
      <div className="grid grid-cols-12 items-start gap-8">
        <Reveal className="col-span-5">
          <img
            src={viniciusPhotoAsset.url}
            alt="Vinícius Araújo UGC Content"
            className="w-full rounded-[18px] object-cover"
            style={{
              aspectRatio: "1 / 1",
              border: "1px solid var(--color-neon)",
              boxShadow: "0 0 40px -10px color-mix(in oklab, var(--color-neon) 50%, transparent)",
            }}
          />
        </Reveal>
        <Reveal delay={140} className="col-span-6 col-start-7 pt-6">
          <h3 className="font-display text-[32px] font-extrabold tracking-[-0.03em] uppercase text-ink">
            Me conheça
          </h3>
          <div className="mt-4 space-y-4 text-[16px] leading-[1.6] text-forest whitespace-pre-line">
            <p>
              {"Sou o Vinícius, UGC creator formado pela vida.\n\nJá tentei várias formas de ganhar dinheiro na internet: vender\ntênis, tocar loja em marketplace, testar diferentes modelos.\nAntes disso, trabalhei no McDonald’s, tentei ser fotógrafo e\nexplorei caminhos criativos que não deram certo de primeira.\nTudo isso virou bagagem. Hoje sou detalhista com meus\nconteúdos, tenho senso estético apurado e foco total em\ncriar vídeos naturais, que parecem reais porque são.\n\nFora do trabalho, curto viajar, conhecer lugares novos, fazer\natividades ao ar livre e manter a rotina de treino. Esse lifestyle\naparece nos meus conteúdos de forma orgânica.\n\n Eu não vendo produto, eu mostro experiência real. E é isso\nque gera conexão de verdade com o público e com as marcas."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CreativeProcess() {
  const steps = [
    {
      title: "DIAGNÓSTICO INICIAL",
      description:
        "Fase de alinhamento para compreender os objetivos da marca e mapear as melhores estratégias de conteúdo para entregar resultados reais.",
    },
    {
      title: "FORMALIZAÇÃO",
      description: "Trâmite contratual ágil e descomplicado:",
      list: [
        "Disponibilização de contrato padrão para assinatura eletrônica.",
        "Preenchimento exclusivo com as informações jurídicas da contratante.",
      ],
    },
    {
      title: "PLANEJAMENTO CRIATIVO",
      description: "Definição da linha narrativa da campanha:",
      list: [
        "Elaboração de roteiros personalizados seguindo as diretrizes da marca.",
        "Flexibilidade para trabalhar com briefing próprio da empresa ou aprovação do material desenvolvido por mim.",
      ],
    },
    {
      title: "EXECUÇÃO E CRONOGRAMA",
      description: "Ciclo completo de entrega em até 5 dias úteis:",
      list: [
        "Etapas: Criação de roteiro → Validação → Captação e Edição → Revisões finais → Envio via Google Drive.",
      ],
    },
    {
      title: "CONDIÇÕES COMERCIAIS",
      list: [
        "Faturamento: Pagamento do valor integral realizado no ato da entrega final dos conteúdos.",
        "Fiscal: Nota fiscal emitida imediatamente após a confirmação do pagamento.",
      ],
    },
  ];

  return (
    <section className="bg-forest/10 py-32">
      <div className="mx-auto flex w-[1240px] items-start gap-16">
        <div className="flex-1">
          <Reveal>
            <h2 className="font-display text-[72px] font-black tracking-[-0.04em] uppercase text-forest">
              Processo criativo
            </h2>
          </Reveal>
          <Reveal delay={200} className="mt-12">
            <div className="relative">
              <img
                src={processAsset.url}
                alt="Exemplos de Conteúdo"
                className="w-[580px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />
            </div>
          </Reveal>
        </div>

        <div className="w-[520px] pt-8">
          <div className="space-y-10">
            {steps.map((step, idx) => (
              <Reveal key={step.title} delay={300 + idx * 100}>
                <div className="group relative flex gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-forest/30 text-forest">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-[18px] font-extrabold tracking-tight uppercase text-forest">
                      {step.title}
                    </h4>
                    {step.description && (
                      <p className="mt-2 text-[14px] leading-relaxed text-forest/80">
                        {step.description}
                      </p>
                    )}
                    {step.list && (
                      <ul className="mt-2 list-disc space-y-1 pl-4 text-[14px] leading-relaxed text-forest/80">
                        {step.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-8 left-3 h-[calc(100%+24px)] w-[1px] bg-forest/20" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contato"
      className="grain relative overflow-hidden py-32"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[380px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          background: "color-mix(in oklab, var(--color-neon) 22%, transparent)",
          animation: "glow-pulse 6s ease-in-out infinite",
        }}
      />
      <div className="relative mx-auto flex w-[1240px] items-end justify-between">
        <div>
          <span
            className="font-sans text-[11px] tracking-[0.34em] uppercase"
            style={{ color: "var(--color-neon)" }}
          >
            Bora criar
          </span>
          <h2
            className="mt-4 font-display text-[92px] leading-[0.84] font-black tracking-[-0.05em] uppercase"
            style={{ color: "var(--color-bone)" }}
          >
            Sua marca
            <br />
            no feed certo
          </h2>
          <div className="mt-8 flex gap-6 text-[13px] tracking-[0.16em] uppercase">
            <a
              data-cursor="link"
              href="mailto:contato@viniciusaraujo.ugc"
              className="flex cursor-none items-center gap-2"
              style={{ color: "var(--color-bone)" }}
            >
              <Mail size={15} /> E-mail
            </a>
            <a
              data-cursor="link"
              href="https://instagram.com"
              className="flex cursor-none items-center gap-2"
              style={{ color: "var(--color-bone)" }}
            >
              <Instagram size={15} /> Instagram
            </a>
          </div>
        </div>

        <a
          data-cursor="link"
          href="mailto:contato@viniciusaraujo.ugc"
          className="mb-3 flex cursor-none items-center gap-3 rounded-full px-11 py-6 font-display text-[20px] font-bold tracking-[-0.01em] uppercase transition-transform duration-300 hover:scale-[1.04]"
          style={{
            border: "1px solid var(--color-neon)",
            color: "var(--color-neon)",
            animation: "neon-breathe 2.6s ease-in-out infinite",
          }}
        >
          Fechar collab <ArrowUpRight size={22} />
        </a>
      </div>
      <p
        className="relative mx-auto mt-24 w-[1240px] text-[11px] tracking-[0.2em] uppercase"
        style={{ color: "color-mix(in oklab, var(--color-bone) 45%, transparent)" }}
      >
        © {new Date().getFullYear()} Vinícius Araújo — UGC Creator
      </p>
    </section>
  );
}
