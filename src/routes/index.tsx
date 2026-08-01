import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail, Play } from "lucide-react";
import { FixedScale } from "@/components/site/FixedScale";
import { NeonCursor } from "@/components/site/NeonCursor";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { NicheSection } from "@/components/site/NicheSection";
import { Reveal } from "@/components/site/Reveal";
import { niches } from "@/components/site/niches";
import { BackToTop } from "@/components/site/BackToTop";
import designAsset from "@/assets/design_sem_nome_1.png.asset.json";

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
        <main className="grain relative overflow-hidden bg-bone font-sans text-ink">
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
            <Reveal className="flex items-end justify-between">
              <h2 className="font-display text-[86px] leading-[0.85] font-extrabold tracking-[-0.045em] uppercase">
                Portfólio
                <br />
                <span className="text-forest">por nicho</span>
              </h2>
              <p className="w-[340px] pb-3 text-[14px] leading-relaxed text-forest">
                Nove nichos, mais de setenta entregas. Cada bloco abaixo é um território onde já
                produzi, roteirizei e editei conteúdo vertical do zero.
              </p>
            </Reveal>
            {niches.map((niche, i) => (
              <NicheSection key={niche.id} niche={niche} index={i} />
            ))}
          </div>

          <Contact />
        </main>
      </FixedScale>
      <BackToTop />
    </>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-[1240px] items-center justify-between pt-9">
      <span className="font-display text-[18px] font-extrabold tracking-[-0.02em] uppercase text-ink">
        Vinícius<span style={{ color: "var(--color-neon)" }}>.</span>Araújo
      </span>
      <nav className="flex items-center gap-8 text-[12px] tracking-[0.2em] text-forest uppercase">
        <a data-cursor="link" className="cursor-none hover:text-ink" href="#sobre">
          Sobre
        </a>
        <a data-cursor="link" className="cursor-none hover:text-ink" href="#moda">
          Portfólio
        </a>
        <a data-cursor="link" className="cursor-none hover:text-ink" href="#contato">
          Contato
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto w-[1240px] pt-16 pb-24">
      <div
        className="pointer-events-none absolute top-24 left-[-80px] h-[420px] w-[620px] rounded-full blur-[110px]"
        style={{
          background: "color-mix(in oklab, var(--color-neon) 30%, transparent)",
          animation: "glow-pulse 5s ease-in-out infinite",
        }}
      />
      <div className="relative flex items-end gap-14">
        <div className="flex-1">
          <span className="font-sans text-[12px] tracking-[0.34em] text-forest uppercase">
            UGC CREATOR MASCULINO - SÃO PAULO, BRASIL
          </span>
          <h1 className="mt-5 font-display text-[136px] leading-[0.82] font-black tracking-[-0.055em] uppercase">
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
          <div className="mt-8 flex items-center gap-5">
            <span
              className="rounded-full px-5 py-2 font-sans text-[12px] tracking-[0.24em] uppercase"
              style={{
                border: "1px solid var(--color-neon)",
                color: "var(--color-ink)",
                boxShadow: "0 0 22px -6px color-mix(in oklab, var(--color-neon) 70%, transparent)",
              }}
            >
              UGC Creator
            </span>
            <p className="w-[330px] text-[14px] leading-relaxed text-forest">
              Conteúdo vertical feito para parecer recomendação de amigo — e performar como anúncio.
            </p>
          </div>
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
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 35%, color-mix(in oklab, var(--color-forest) 70%, transparent), transparent 65%)",
              }}
            />
            <div className="grain absolute inset-0 opacity-50" />
            <div className="absolute inset-x-4 top-4 flex items-center gap-2">
              <span
                className="h-1 flex-1 rounded-full"
                style={{ background: "var(--color-neon)" }}
              />
              <span className="h-1 flex-1 rounded-full bg-white/25" />
              <span className="h-1 flex-1 rounded-full bg-white/25" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full"
                style={{ border: "1px solid var(--color-neon)", color: "var(--color-neon)" }}
              >
                <Play size={24} strokeWidth={2.4} />
              </span>
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
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto w-[1240px] pb-24">
      <div className="grid grid-cols-12 items-start gap-8">
        <Reveal className="col-span-5">
          <img
            src={designAsset.url}
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
