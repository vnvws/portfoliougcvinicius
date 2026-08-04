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

import viniciusPhotoAsset from "@/assets/vinicius-photo.jpg.asset.json";
import aboutCollageAsset from "@/assets/about-collage.png.asset.json";
import photoTech from "@/assets/photos/ugc-photo-tech.jpg.asset.json";
import photoSkincare from "@/assets/photos/ugc-photo-skincare.jpg.asset.json";
import photoSkincare2 from "@/assets/photos/ugc-photo-skincare-2.jpg.asset.json";
import photoModa from "@/assets/photos/ugc-photo-moda.jpg.asset.json";
import photoModa2 from "@/assets/photos/ugc-photo-moda-2.jpg.asset.json";
import photoGroups from "@/assets/photos/ugc-photo-groups.jpg.asset.json";
import photoSneakers from "@/assets/photos/ugc-photo-sneakers.jpg.asset.json";
import photoDrinks from "@/assets/photos/ugc-photo-drinks.jpg.asset.json";
import photoDrinks2 from "@/assets/photos/ugc-photo-drinks-2.jpg.asset.json";
import photoWatch from "@/assets/photos/ugc-photo-watch.jpg.asset.json";
import feedback1 from "@/assets/feedbacks/1.png.asset.json";
import feedback2 from "@/assets/feedbacks/2.png.asset.json";
import feedback3 from "@/assets/feedbacks/3.png.asset.json";
import feedback4 from "@/assets/feedbacks/4.png.asset.json";
import feedback5 from "@/assets/feedbacks/5.png.asset.json";
import feedback6 from "@/assets/feedbacks/6.png.asset.json";
import feedback7 from "@/assets/feedbacks/7.png.asset.json";
import feedback8 from "@/assets/feedbacks/8.png.asset.json";
import feedback9 from "@/assets/feedbacks/9.png.asset.json";
import feedback10 from "@/assets/feedbacks/10.png.asset.json";
import InvestmentSection from "@/components/site/InvestmentSection";
import PackageSection from "@/components/site/PackageSection";
import ContactSection from "@/components/site/ContactSection";


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
        <main className="grain relative w-full overflow-hidden bg-bone font-display text-ink">
          <Nav />
          <Hero />
          <section className="relative -mt-16">
            <div className="mx-auto w-[1240px] pb-6">
              <p className="text-[11px] font-bold tracking-[0.32em] text-forest opacity-80">
                Marcas que já confiaram
              </p>
            </div>
            <BrandMarquee />
          </section>
          <div className="pt-24">
            <About />
          </div>

          <div className="mx-auto flex w-[1240px] flex-col gap-16 pt-24 pb-32">
            {niches
              .map((niche, i) => (
                <NicheSection key={niche.id} niche={niche} index={i} />
              ))}
          </div>

          
          
          <FeedbackSection />
          <InvestmentSection />
          <PackageSection />


          <ContactSection />
        </main>
      </FixedScale>
      <BackToTop />
    </>
  );
}

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-[1240px] items-center justify-between pt-4">
      <span className="font-display text-[18px] font-extrabold tracking-[-0.02em] text-ink">
        Vinícius<span style={{ color: "var(--color-neon)" }}>.</span>Araújo
      </span>
      <nav className="flex items-center gap-6 text-[10px] tracking-[0.15em] text-forest">
        {niches
          .map((niche) => (
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
    <section className="relative mx-auto w-[1240px] pt-4 pb-8">
      <div
        className="pointer-events-none absolute top-24 left-[-80px] h-[420px] w-[620px] rounded-full blur-[110px]"
        style={{
          background: "color-mix(in oklab, var(--color-neon) 30%, transparent)",
          animation: "glow-pulse 5s ease-in-out infinite",
        }}
      />
      <div className="relative flex items-center justify-between gap-14 px-12">
        <div className="relative z-10 flex-1">
          <span className="text-[12px] tracking-[0.34em] text-forest">
            UGC Creator Masculino - São Paulo, Brasil
          </span>
          <h1 className="mt-8 font-display text-[136px] leading-[0.82] font-black tracking-[-0.055em]">
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
          <div className="mt-20 flex justify-center">
            <Reveal delay={400}>
              <a
                href="https://api.whatsapp.com/message/RRN5XSTCXBCBK1?autoload=1&app_absent=0"
                className="group relative inline-flex items-center justify-center rounded-full px-12 py-5 font-display text-[24px] font-black tracking-widest transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "var(--color-neon)",
                  color: "var(--color-ink)",
                  boxShadow: "0 0 30px var(--color-neon)",
                  animation: "pulse-neon 2s infinite"
                }}
              >
                Contratar
              </a>
            </Reveal>
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
            <img 
              src={viniciusPhotoAsset.url} 
              alt="Vinícius Araújo"
              loading="eager"
              decoding="async"
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
            className="absolute -bottom-5 -left-8 -rotate-3 rounded-full px-4 py-1.5 text-[11px] tracking-[0.2em]"
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
            src={aboutCollageAsset.url}
            alt="Vinícius Araújo UGC Content"
            loading="lazy"
            decoding="async"
            className="w-full rounded-[18px] object-contain"
            style={{
              aspectRatio: "1 / 1",
              border: "1px solid var(--color-neon)",
              boxShadow: "0 0 40px -10px color-mix(in oklab, var(--color-neon) 50%, transparent)",
            }}
          />
        </Reveal>
        <Reveal delay={140} className="col-span-6 col-start-7 pt-6">
          <h3 className="font-display text-[32px] font-extrabold tracking-[-0.03em] text-ink">
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



function FeedbackSection() {
  const feedbacks = [
    feedback1,
    feedback2,
    feedback3,
    feedback4,
    feedback5,
    feedback6,
    feedback7,
    feedback8,
    feedback9,
    feedback10,
  ];

  return (
    <section className="py-32 overflow-hidden bg-forest/5">
      <div className="mx-auto w-[1240px] mb-12">
        <Reveal>
          <h2 className="font-display text-[72px] font-black tracking-[-0.04em] text-forest">
            Feedbacks
          </h2>
        </Reveal>
      </div>
      
      <div className="relative w-full overflow-hidden px-12">
        <div className="flex w-max gap-6 animate-marquee">
          {feedbacks.map((f, idx) => (
            <FeedbackCard key={`f-${idx}`} src={f.url} index={idx} />
          ))}
          {feedbacks.map((f, idx) => (
            <FeedbackCard key={`f-clone-${idx}`} src={f.url} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeedbackCard({ src, index }: { src: string; index: number }) {
  return (
    <div 
      className="relative w-[360px] flex-shrink-0 overflow-hidden rounded-[22px] bg-white p-4 shadow-lg"
      style={{
        border: "1px solid color-mix(in oklab, var(--color-forest) 20%, transparent)",
      }}
    >
      <img 
        src={src} 
        alt={`Feedback ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

