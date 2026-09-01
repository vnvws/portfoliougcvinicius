import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useState, useEffect, useRef, memo } from "react";
import { Play, Instagram, Mail, ArrowUpRight, ChevronRight, BarChart3, Target, Share2, TrendingUp, Video, PlayCircle, MessageCircle, X } from "lucide-react";
import { useInView } from "@/components/site/Reveal";
import { InlineVideo } from "@/components/site/InlineVideo";
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
const ProcessSection = lazy(() => import("@/components/site/ProcessSection"));



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

  const scrollToPortfolio = (nicheId: string) => {
    setActiveTab(nicheId);
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NeonCursor />
      <FixedScale>
        <main className="relative w-full overflow-hidden bg-bone font-display text-ink">
          {/* Top Navigation Bar */}
          <nav className="w-full bg-[#252525] py-2.5">
            <div className="mx-auto flex w-full max-w-[1240px] items-center justify-center px-4 sm:px-8 lg:px-12">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
                {niches.map((niche) => (
                  <button
                    key={niche.id}
                    onClick={() => scrollToPortfolio(niche.id)}
                    aria-label={`Ver nicho ${niche.title}`}
                    className="font-display text-[9px] font-bold tracking-[0.08em] text-[#7dff00] uppercase transition-all hover:opacity-70 active:scale-95 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-4 cursor-none whitespace-nowrap sm:text-[10px]"
                  >
                    {niche.title}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <Hero />
          
          <section className="relative mt-4 sm:mt-0 mb-12 sm:mb-6 overflow-hidden">
            <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-8 lg:px-12">
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-forest/10" />
                <p className="flex-shrink-0 text-[10px] font-bold tracking-[0.32em] text-forest/40 uppercase whitespace-nowrap sm:text-[11px]">
                  Marcas que já confiaram
                </p>
                <div className="h-[1px] flex-1 bg-forest/10" />
              </div>
            </div>
            <BrandMarquee />
          </section>

          <div className="pt-6 sm:pt-2">
            <About />
          </div>
          
          <EngagementSection />

          {/* Portfolio Section */}
          <section id="portfolio" className="mx-auto w-full max-w-[1240px] pt-6 pb-10 px-4 sm:px-8 lg:px-12">
            <div className="mb-8 flex flex-col items-center">
              <span className="text-[11px] font-bold tracking-[0.4em] text-forest/40 uppercase mb-4">Portfólio</span>
              <div className="h-[1px] w-24 bg-neon" />
            </div>

            <div className="mb-12 px-0 sm:px-0">
              <PortfolioNav activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            <div className="relative">
              {niches.map((niche) => (
                activeTab === niche.id && (
                  <div key={niche.id} className="animate-in fade-in duration-500">
                    <div className="mb-12 px-0 sm:px-0">
                      <h2 className="font-display text-[clamp(42px,6vw,64px)] font-black tracking-[-0.04em] text-forest leading-tight">
                        {niche.title}
                      </h2>
                      <div className="mt-2 h-[2px] w-32 bg-neon/30" />
                    </div>
                    <PortfolioGrid niche={niche} index={0} />
                  </div>
                )
              ))}
            </div>
          </section>

          <FeedbackSection />

          <Suspense fallback={<div className="h-96" />}>
            <div className="optimize-section">
              <ProcessSection />
            </div>
          </Suspense>

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
      <ExitPopup />
    </>
  );
}

function PortfolioGrid({ niche, index }: { niche: Niche; index: number }) {
  return (
    <PortfolioGridInner niche={niche} index={index} />
  );
}


const PortfolioGridInner = memo(function PortfolioGridInner({ niche, index }: { niche: Niche; index: number }) {
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
});

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
    <div className="relative w-full group/nav px-4 sm:px-8 lg:px-12">
      {/* Left Indicator */}
      {showLeftArrow && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-bone via-bone/80 to-transparent transition-opacity duration-500 sm:w-24" />
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 z-30 -translate-y-1/2 text-forest/40 transition-all hover:text-neon hover:scale-110 active:scale-95 sm:left-[52px]"
            aria-label="Ver nichos anteriores"
          >
            <ChevronRight className="rotate-180" size={20} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Main Scrollable Area */}
      <div 
        ref={scrollRef}
        className="flex w-full items-center gap-x-6 sm:gap-x-10 overflow-x-auto overflow-y-hidden pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x"
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
            aria-selected={activeTab === niche.id}
            role="tab"
            aria-label={`Nicho ${niche.title}`}
            className={`group relative flex-shrink-0 cursor-none py-2 font-display text-[12px] font-bold tracking-[0.12em] uppercase transition-all duration-300 snap-start focus-visible:text-neon sm:text-[14px] sm:tracking-[0.15em] ${
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
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-bone via-bone/80 to-transparent transition-opacity duration-500 sm:w-24" />
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 z-30 -translate-y-1/2 text-forest/40 transition-all hover:text-neon hover:scale-110 active:scale-95 sm:right-[52px]"
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
  
  useEffect(() => {
    setActiveVideoSrc(null);
  }, [setActiveVideoSrc]);

  return (
    <section className="relative mx-auto w-full max-w-[1240px] pt-4 pb-12 px-4 sm:px-8 lg:px-12 sm:pb-4">
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
        <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          <Reveal>
            <span className="text-[10px] sm:text-[12px] font-semibold tracking-[0.34em] text-forest uppercase">
              UGC Creator Masculino · São Paulo, Brasil
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-4 font-display text-[clamp(56px,10vw,120px)] leading-[0.85] font-black tracking-[-0.05em] text-ink uppercase">
              Vinícius
              <br />
              <span className="text-[#7dff00]">Araújo</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 sm:mt-8 max-w-[540px] w-[90%] sm:w-full text-[15px] sm:text-[18px] leading-[1.55] text-ink/80 font-normal">
              Vídeos UGC com presença masculina para apresentar produtos e serviços de um jeito natural, direto e feito para social e ads.
            </p>
          </Reveal>

          <Reveal delay={300} className="w-full">
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row w-full max-w-[680px] items-start justify-between gap-6">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <Share2 size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[13px] font-bold leading-tight text-ink uppercase tracking-wider">
                    FEITO PARA SOCIAL
                  </span>
                  <span className="text-[12px] sm:text-[11px] font-normal leading-tight text-ink/60 mt-0.5">
                    Reels, TikTok e Shorts
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <TrendingUp size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[13px] font-bold leading-tight text-ink uppercase tracking-wider">
                    PRONTO PARA ADS
                  </span>
                  <span className="text-[12px] sm:text-[11px] font-normal leading-tight text-ink/60 mt-0.5">
                    Conteúdo pensado para campanhas
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/5 text-forest">
                  <Video size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] sm:text-[13px] font-bold leading-tight text-ink uppercase tracking-wider">
                    PRODUÇÃO COMPLETA
                  </span>
                  <span className="text-[12px] sm:text-[11px] font-normal leading-tight text-ink/60 mt-0.5">
                    Roteiro, gravação e edição
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://api.whatsapp.com/message/RRN5XSTCXBCBK1?autoload=1&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar comigo pelo WhatsApp"
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-300 hover:bg-[#7dff00] hover:text-[#252525] hover:-translate-y-1 active:scale-90 touch-manipulation"
                >
                  <MessageCircle size={20} className="max-[639px]:w-[22px] max-[639px]:h-[22px]" />
                </a>
                <a
                  href="https://www.instagram.com/_oviniciusaraujo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver meu Instagram"
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-300 hover:bg-[#7dff00] hover:text-[#252525] hover:-translate-y-1 active:scale-90 touch-manipulation"
                >
                  <Instagram size={20} className="max-[639px]:w-[22px] max-[639px]:h-[22px]" />
                </a>
                <a
                  href="https://www.tiktok.com/@viniviews_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver meu TikTok"
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-300 hover:bg-[#7dff00] hover:text-[#252525] hover:-translate-y-1 active:scale-90 touch-manipulation"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-[20px] w-[20px] max-[639px]:w-[22px] max-[639px]:h-[22px]"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
                <a
                  href="mailto:comercial.viniciusugc@gmail.com"
                  aria-label="Enviar um e-mail"
                  className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-forest/5 text-forest transition-all duration-300 hover:bg-[#7dff00] hover:text-[#252525] hover:-translate-y-1 active:scale-90 touch-manipulation"
                >
                  <Mail size={20} className="max-[639px]:w-[22px] max-[639px]:h-[22px]" />
                </a>
              </div>

              <a
                href="#portfolio"
                className="group relative flex items-center gap-2 font-display text-[15px] sm:text-[18px] font-black tracking-widest text-forest transition-all duration-300 hover:opacity-70 active:scale-95"
              >
                <span>VER PORTFÓLIO</span>
                <ChevronRight size={20} className="max-[639px]:w-[20px] max-[639px]:h-[20px] transition-transform duration-300 group-hover:translate-x-1.5" />
                <div className="absolute -bottom-1 left-0 h-[2px] w-full bg-forest/20 transition-all duration-300 group-hover:bg-forest group-hover:h-[3px]" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] shrink-0">
          <div
            className="relative overflow-hidden rounded-[22px] bg-ink shadow-2xl"
            style={{
              aspectRatio: "9 / 16",
              border: "2px solid var(--color-neon)",
              transform: "rotate(3deg)",
            }}
          >
            <img 
              src={viniciusPhotoAsset.url} 
              alt="Vinícius Araújo - UGC Creator Masculino"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
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
            className="absolute -bottom-5 -left-2 sm:-left-8 -rotate-3 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-[12px] font-bold tracking-[0.2em] shadow-lg"
            style={{ backgroundColor: "var(--color-ink)", color: "var(--color-neon)" }}
          >
            UGC CREATOR MASCULINO
          </span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="mx-auto w-full max-w-[1240px] pb-8 px-4 sm:px-8 lg:px-12 sm:pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-8">
        <Reveal className="col-span-1 lg:col-span-5">
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
        <Reveal delay={140} className="col-span-1 lg:col-span-6 lg:col-start-7 pt-0 lg:pt-6">
          <h2 className="font-display text-[clamp(42px,6vw,72px)] font-black tracking-[-0.04em] text-forest leading-none">
            Me conheça
          </h2>
          <div className="mt-4 space-y-4 text-[15px] sm:text-[16px] leading-[1.6] text-forest whitespace-pre-line">
            <p>
              {"Sou o Vinícius, UGC creator formado pela vida.\n\nJá tentei várias formas de ganhar dinheiro na internet: vender\ntênis, tocar loja em marketplace, testar diferentes modelos.\nAntes disso, trabalhei no McDonald's, tentei ser fotógrafo e\nexplorei caminhos criativos que não deram certo de primeira.\nTudo isso virou bagagem. Hoje sou detalhista com meus\nconteúdos, tenho senso estético apurado e foco total em\ncriar vídeos naturais, que parecem reais porque são.\n\nFora do trabalho, curto viajar, conhecer lugares novos, fazer\natividades ao ar livre e manter a rotina de treino. Esse lifestyle\naparece nos meus conteúdos de forma orgânica.\n\n Eu não vendo produto, eu mostro experiência real. E é isso\nque gera conexão de verdade com o público e com as marcas."}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CountUp({ end, duration = 2000, prefix = "", suffix = "" }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView<HTMLSpanElement>(0.1);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true;
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
}

function EngagementSection() {
  const engagementVideos = [
    {
      url: "https://youtube.com/shorts/bePfSKXFfME?feature=share",
      views: 122,
      platform: "Instagram"
    },
    {
      url: "https://youtube.com/shorts/k8V2_CJa-8M?feature=share",
      views: 190,
      platform: "TikTok"
    },
    {
      url: "https://youtube.com/shorts/Ra4LIIQWTRE?si=cj8Cf5wOQe9vdqtz",
      views: 420,
      platform: "TikTok"
    }
  ];

  return (
    <section className="mx-auto w-full max-w-[1240px] pt-6 pb-10 px-4 sm:px-8 lg:px-12">
      <div className="mb-12 flex flex-col items-center">
        <Reveal>
          <h2 className="font-display text-[clamp(28px,5vw,48px)] sm:text-[clamp(32px,5vw,48px)] font-black tracking-[-0.04em] text-forest text-center leading-[1.1]">
            Mais engajamento e mais conversão
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-4 h-[1px] w-24 bg-neon" />
        </Reveal>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {engagementVideos.map((video, idx) => (
            <Reveal key={video.url} delay={200 + idx * 100}>
              <div className="flex flex-col items-center">
                <div 
                  className="relative w-full overflow-hidden rounded-[22px] bg-ink shadow-2xl max-w-[260px] sm:max-w-[320px] mx-auto w-full"
                  style={{ 
                    aspectRatio: "9 / 16",
                    border: "1px solid rgba(125, 255, 0, 0.2)"
                  }}
                >
                  <InlineVideo 
                    youtubeUrl={video.url} 
                  />
                </div>
                <div className="mt-4 text-center font-display uppercase">
                  <p className="text-[20px] sm:text-[24px] font-black tracking-tighter text-forest leading-none">
                    +De <CountUp end={video.views} suffix=" mil" />
                  </p>
                  <p className="mt-1 text-[11px] sm:text-[12px] font-bold tracking-widest text-forest/50">
                    views no {video.platform}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
    <section className="pt-10 pb-0 overflow-hidden bg-bone">
      <div className="mx-auto w-full max-w-[1240px] mb-4 px-4 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="font-display text-[clamp(42px,6vw,72px)] font-black tracking-[-0.04em] text-forest leading-none">
            Feedbacks
          </h2>
        </Reveal>
      </div>
      
      <div className="relative w-full overflow-hidden px-4 touch-pan-x sm:px-12" style={{ isolation: 'isolate' }}>
        <div 
          className="flex w-max gap-4 animate-marquee"
          style={{ 
            transform: "translate3d(0, 0, 0)",
            WebkitTransform: "translate3d(0, 0, 0)",
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
      className="relative w-[260px] sm:w-[320px] lg:w-[380px] h-[200px] sm:h-[240px] lg:h-[280px] flex-shrink-0 overflow-hidden rounded-[18px] bg-white p-2 sm:p-3"
      style={{
        border: "1px solid color-mix(in oklab, var(--color-forest) 20%, transparent)",
      }}
    >
      <img 
        src={src} 
        alt={`Feedback ${index + 1}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function ExitPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (inView && !hasShown) {
      setIsOpen(true);
      setHasShown(true);
    }
  }, [inView, hasShown]);

  if (!isOpen) return <div ref={ref} className="h-1 w-full" />;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-[32px] border border-forest/10 bg-white p-6 sm:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute right-4 sm:right-6 top-4 sm:top-6 flex h-10 w-10 items-center justify-center rounded-full bg-forest/5 text-forest transition-all hover:bg-neon hover:text-ink"
          aria-label="Fechar popup"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/5 text-neon">
            <MessageCircle size={32} />
          </div>
          
          <h2 className="mb-4 font-display text-[clamp(24px,4vw,32px)] font-black leading-tight text-forest">
            Vamos decolar <span className="text-neon">sua marca?</span>
          </h2>
          
          <p className="mb-10 text-[14px] sm:text-[16px] leading-relaxed text-forest/70">
            Peça agora sua proposta personalizada. Eu volto em até 24h úteis para darmos início à sua próxima campanha.
          </p>

          <a
            href="https://api.whatsapp.com/message/RRN5XSTCXBCBK1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex w-full items-center justify-center gap-3 rounded-2xl bg-neon py-4 sm:py-5 text-[13px] sm:text-[14px] font-bold tracking-[0.2em] text-ink transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              boxShadow: "0 4px 0 0 oklch(0.75 0.25 135)"
            }}
          >
            SOLICITAR PROPOSTA
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-6 text-[12px] font-bold tracking-widest text-forest/40 uppercase transition-colors hover:text-forest"
          >
            TALVEZ DEPOIS
          </button>
        </div>
      </div>
    </div>
  );
}
