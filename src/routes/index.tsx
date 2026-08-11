import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { Play, Instagram, Mail, ArrowUpRight, ChevronRight } from "lucide-react";
import { FixedScale, useVideoControl } from "@/components/site/FixedScale";
import { NeonCursor } from "@/components/site/NeonCursor";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { NicheSection } from "@/components/site/NicheSection";
import { Reveal } from "@/components/site/Reveal";
import { niches as rawNiches } from "@/components/site/niches";
import type { Niche } from "@/components/site/niches";

const niches: Niche[] = rawNiches;
import { BackToTop } from "@/components/site/BackToTop";
import mainCollageAsset from "@/assets/main-collage.png.asset.json";

import viniciusPhotoAsset from "@/assets/vinicius-photo.jpg.asset.json";
import aboutCollageAsset from "@/assets/about-collage.png.asset.json";
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
const InvestmentSection = lazy(() => import("@/components/site/InvestmentSection"));
const PackageSection = lazy(() => import("@/components/site/PackageSection"));
const ContactSection = lazy(() => import("@/components/site/ContactSection"));


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinícius Araújo | UGC Creator Masculino - Portfólio" },
      {
        name: "description",
        content:
          "Vinícius Araújo, UGC Creator masculino focado em alta conversão. Produção de vídeos reais para marcas: UGC, TikTok, Reels e Shorts nos nichos de tech, moda, apps e lifestyle.",
      },
      { name: "keywords", content: "UGC, UGC Creator, UGC Creator masculino, UGC creator homem, criador de conteúdo, vídeo marketing, marketing de influência, TikTok Ads, Reels Ads" },
      { property: "og:title", content: "Vinícius Araújo | UGC Creator Masculino" },
      {
        property: "og:description",
        content: "Transforme sua marca com conteúdo UGC autêntico criado por um especialista. Vídeos verticais que geram conexão e vendas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://portfoliougcvinicius.lovable.app/og-image.png" },
      { property: "og:url", content: "https://portfoliougcvinicius.lovable.app" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vinícius Araújo | UGC Creator Masculino" },
      { name: "twitter:description", content: "Conteúdo UGC autêntico que converte. O criador ideal para sua campanha de tráfego pago ou orgânico." },
      { name: "twitter:image", content: "https://portfoliougcvinicius.lovable.app/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeTab, setActiveTab] = useState(niches[0]?.id || "");

  return (
    <>
      <NeonCursor />
      <FixedScale>
        <main className="relative w-full overflow-hidden bg-bone font-display text-ink pt-12">
          <Hero />
          
          <section className="relative -mt-16">
            <div className="mx-auto w-[1240px] pb-6 px-12">
              <p className="text-[11px] font-bold tracking-[0.32em] text-forest opacity-80">
                Marcas que já confiaram
              </p>
            </div>
            <BrandMarquee />
          </section>

          <div className="pt-12">
            <About />
          </div>

          {/* Portfolio Section - Tabbed for Maximum Performance */}
          <section id="portfolio" className="mx-auto w-[1240px] pt-12 pb-16">
            <div className="mb-8 flex flex-col items-center">
              <span className="text-[11px] font-bold tracking-[0.4em] text-forest/40 uppercase mb-4">Portfólio</span>
              <div className="h-[1px] w-24 bg-neon" />
            </div>

            <div className="mb-12">
              <PortfolioNav activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/*
              Altura reservada de forma estável: um "ghost" invisível define a altura
              máxima (2 linhas de cards verticais + título), e o conteúdo ativo é
              renderizado sobreposto. Assim trocar de nicho nunca altera a altura do
              documento — nenhum jump vertical, nenhum scrollTo corretivo.
            */}
            <div className="relative">
              <PortfolioSizer />
              <div className="absolute inset-x-0 top-0">
                {niches.map((niche, index) => (
                  activeTab === niche.id && (
                    <div key={niche.id} className="animate-in fade-in duration-500">
                      <div className="mb-12 px-12">
                        <h2 className="font-display text-[64px] font-black tracking-[-0.04em] text-forest leading-tight uppercase">
                          {niche.title}
                        </h2>
                        <div className="mt-2 h-[2px] w-32 bg-neon/30" />
                      </div>
                      <PortfolioGrid niche={niche} index={index} />
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>

          <FeedbackSection />
          
          <Suspense fallback={<div className="h-48" />}>
            <div className="optimize-section">
              <InvestmentSection />
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="h-96" />}>
            <div className="optimize-section">
              <PackageSection />
            </div>
          </Suspense>
          
          <Suspense fallback={<div className="h-96" />}>
            <div className="optimize-section">
              <ContactSection />
            </div>
          </Suspense>
        </main>
      </FixedScale>
      <BackToTop />
    </>
  );
}

function PortfolioGrid({ niche, index }: { niche: Niche; index: number }) {

  return (
    <PortfolioGridInner niche={niche} index={index} />
  );
}

/** Reserva a altura máxima possível (título + 2 linhas de cards 9/16 + caption). */
function PortfolioSizer() {
  return (
    <div aria-hidden className="invisible pointer-events-none select-none">
      <div className="mb-12 px-12">
        <h2 className="font-display text-[64px] font-black tracking-[-0.04em] leading-tight uppercase">
          .
        </h2>
        <div className="mt-2 h-[2px] w-32" />
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-10 px-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>
            <div className="w-full" style={{ aspectRatio: "9 / 16" }} />
            <div className="pt-3">
              <h4 className="font-display text-[15px] leading-tight font-bold">.</h4>
              <p className="mt-1 font-sans text-[12px] leading-snug">.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioGridInner({ niche, index }: { niche: Niche; index: number }) {
  const [visibleCount, setVisibleCount] = useState(12);
  const isAll = niche.id === "todos";
  
  const displayedVideos = isAll ? niche.videos.slice(0, visibleCount) : niche.videos;
  const hasMore = isAll && visibleCount < niche.videos.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <div className="space-y-12">
      <NicheSection 
        niche={{
          ...niche,
          videos: displayedVideos
        }} 
        index={index} 
      />
      
      {hasMore && (
        <div className="flex justify-center pb-12">
          <button
            onClick={loadMore}
            className="group relative inline-flex items-center justify-center rounded-full border border-forest/20 bg-forest/5 px-10 py-4 font-bold tracking-widest text-forest transition-all hover:bg-forest hover:text-white"
          >
            Carregar mais vídeos
          </button>
        </div>
      )}
    </div>
  );
}

// Removido NicheWrapper pois agora usamos Abas Reais para otimização de memória extrema.


function PortfolioNav({ activeTab, onTabChange }: { activeTab: string; onTabChange: (id: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    
    const canScrollLeft = el.scrollLeft > 5;
    const canScrollRight = el.scrollLeft < (el.scrollWidth - el.clientWidth - 5);
    
    setShowLeftArrow(canScrollLeft);
    setShowRightArrow(canScrollRight);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    
    const ro = new ResizeObserver(checkScroll);
    ro.observe(el);
    
    el.addEventListener('scroll', checkScroll, { passive: true });
    
    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    
    const scrollAmount = 280;
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full px-12 group/nav">
      {/* Left Indicator */}
      {showLeftArrow && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-12 z-20 w-24 bg-gradient-to-r from-bone via-bone/80 to-transparent transition-opacity duration-500" />
          <button 
            onClick={() => scroll('left')}
            className="absolute left-[52px] top-1/2 z-30 -translate-y-1/2 text-forest/40 transition-all hover:text-neon hover:scale-110 active:scale-95"
            aria-label="Ver nichos anteriores"
          >
            <ChevronRight className="rotate-180" size={20} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Main Scrollable Area */}
      <div 
        ref={scrollRef}
        className="flex w-full items-center gap-x-10 overflow-x-auto overflow-y-hidden pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x"
        style={{
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {niches.map((niche) => (
          <button
            key={niche.id}
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onTabChange(niche.id)}
            className={`group relative flex-shrink-0 cursor-none py-2 font-display text-[14px] font-bold tracking-[0.15em] uppercase transition-all duration-300 snap-start ${
              activeTab === niche.id 
                ? 'text-forest' 
                : 'text-forest/30 hover:text-forest/60'
            }`}
          >
            <span className="relative z-10">{niche.title}</span>
            {activeTab === niche.id && (
              <div 
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-neon animate-in fade-in zoom-in duration-300" 
              />
            )}
            <div className="absolute inset-x-0 -bottom-1 h-[1px] w-0 bg-forest/10 transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>
      
      {/* Right Indicator */}
      {showRightArrow && (
        <>
          <div className="pointer-events-none absolute inset-y-0 right-12 z-20 w-24 bg-gradient-to-l from-bone via-bone/80 to-transparent transition-opacity duration-500" />
          <button 
            onClick={() => scroll('right')}
            className="absolute right-[52px] top-1/2 z-30 -translate-y-1/2 text-forest/40 transition-all hover:text-neon hover:scale-110 active:scale-95"
            aria-label="Ver mais nichos"
          >
            <ChevronRight 
              className="animate-hint-arrow" 
              size={20} 
              strokeWidth={2.5} 
            />
          </button>
        </>
      )}
    </div>
  );
}

function Hero() {
  const { setActiveVideoSrc } = useVideoControl();
  
  // Limpar qualquer vídeo ativo ao carregar o Hero (topo da página)
  useEffect(() => {
    setActiveVideoSrc(null);
  }, [setActiveVideoSrc]);
  return (
    <section className="relative mx-auto w-[1240px] pt-4 pb-8">
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
              }}
            >
              Araújo
            </span>
          </h1>
          <div className="mt-20 flex justify-center">
            <Reveal delay={400}>
              <a
                href="https://api.whatsapp.com/message/RRN5XSTCXBCBK1?autoload=1&app_absent=0"
                className="group relative inline-flex items-center justify-center rounded-full px-12 py-5 font-display text-[24px] font-black tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation"
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
    <section id="sobre" className="mx-auto w-[1240px] pb-12">
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
    <section className="py-16 overflow-hidden bg-bone">
      <div className="mx-auto w-[1240px] mb-8">
        <Reveal>
          <h2 className="font-display text-[72px] font-black tracking-[-0.04em] text-forest">
            Feedbacks
          </h2>
        </Reveal>
      </div>
      
      <div className="relative w-full overflow-hidden px-12 touch-pan-x" style={{ isolation: 'isolate' }}>
        <div 
          className="flex w-max gap-6 animate-marquee"
          style={{ 
            transformStyle: "flat", 
            WebkitTransformStyle: "flat", 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            willChange: 'transform'
          }}
          onMouseEnter={(e) => {
            if (window.matchMedia("(pointer: fine)").matches) {
              e.currentTarget.style.animationPlayState = "paused";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
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
      className="relative w-[360px] flex-shrink-0 overflow-hidden rounded-[22px] bg-white p-4"
      style={{
        border: "1px solid color-mix(in oklab, var(--color-forest) 20%, transparent)",
        transform: "translateZ(0)",
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
