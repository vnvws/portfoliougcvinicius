import type { VideoItem } from "./VideoCardVertical";
// @ts-ignore
import promoBlackFriday from "@/assets/videos/promo-black-friday.mp4.asset.json";
// @ts-ignore
import promoSemanaConsumidor from "@/assets/videos/promo-semana-consumidor.mp4.asset.json";
// @ts-ignore
import modaTenis from "@/assets/videos/moda-tenis.mp4.asset.json";
// @ts-ignore
import techComparativo from "@/assets/videos/tech-comparativo.mp4.asset.json";
// @ts-ignore
import alimentosCreatina from "@/assets/videos/alimentos-creatina.mp4.asset.json";
// @ts-ignore
import alimentosRedbull from "@/assets/videos/alimentos-redbull.mp4.asset.json";
// @ts-ignore
import video1 from "@/assets/videos/video-1.mp4.asset.json";
// @ts-ignore
import semLegenda from "@/assets/videos/sem-legenda.mp4.asset.json";
// @ts-ignore
import videoIphone from "@/assets/videos/tech-comparativo.mp4.asset.json";
// @ts-ignore
import promoSupermercado from "@/assets/videos/promo-supermercado.mp4.asset.json";
// @ts-ignore
import promoGeral from "@/assets/videos/promo-geral.mp4.asset.json";
// @ts-ignore
import promoNike from "@/assets/videos/promo-nike.mp4.asset.json";
// @ts-ignore
import appsVideoLegenda from "@/assets/videos/apps-video-legenda.mp4.asset.json";
// @ts-ignore
import appsOpenEnglish from "@/assets/videos/apps-open-english.mp4.asset.json";
// @ts-ignore
import appsGancho1 from "@/assets/videos/apps-gancho-1.mp4.asset.json";
// @ts-ignore
import appsGancho2 from "@/assets/videos/apps-gancho-2.mp4.asset.json";
// @ts-ignore
import appsSnaptik from "@/assets/videos/apps-snaptik.mp4.asset.json";
// @ts-ignore
import appsVideo12 from "@/assets/videos/apps-video-1-2.mp4.asset.json";
// @ts-ignore
import appsOmie from "@/assets/videos/apps-omie.mp4.asset.json";
// @ts-ignore
import appsGancho1Alt from "@/assets/videos/apps-gancho-1-alt.mp4.asset.json";
// @ts-ignore
import appsVideo1Legendas from "@/assets/videos/apps-video-1-legendas.mp4.asset.json";

interface Asset {
  url: string;
}

const v1 = promoBlackFriday as unknown as Asset;
const v2 = promoSemanaConsumidor as unknown as Asset;
const v3 = modaTenis as unknown as Asset;
const v4 = techComparativo as unknown as Asset;
const v5 = alimentosCreatina as unknown as Asset;
const v6 = alimentosRedbull as unknown as Asset;
const v7 = video1 as unknown as Asset;
const v8 = semLegenda as unknown as Asset;
const v9 = videoIphone as unknown as Asset;
const v10 = promoSupermercado as unknown as Asset;
const v11 = promoGeral as unknown as Asset;
const v12 = promoNike as unknown as Asset;
const a1 = appsVideoLegenda as unknown as Asset;
const a2 = appsOpenEnglish as unknown as Asset;
const a3 = appsGancho1 as unknown as Asset;
const a4 = appsGancho2 as unknown as Asset;
const a5 = appsSnaptik as unknown as Asset;
const a6 = appsVideo12 as unknown as Asset;
const a7 = appsOmie as unknown as Asset;
const a8 = appsGancho1Alt as unknown as Asset;
const a9 = appsVideo1Legendas as unknown as Asset;

export type Niche = {
  id: string;
  title: string;
  layout: "vertical" | "horizontal";
  videos: VideoItem[];
};

export const niches: Niche[] = [
  {
    id: "grupos-de-promocao",
    title: "Grupos de Promoção",
    layout: "vertical",
    videos: [
      {
        title: "Promo Black Friday",
        description: "Vídeo vertical de divulgação com CTA direto para o grupo.",
        src: v1.url,
        label: "Clique"
      },
      {
        title: "Semana do Consumidor",
        description: "Ofertas exclusivas com gatilhos de urgência.",
        src: v2.url,
        label: "Clique"
      },
      {
        title: "Tênis e Ofertas",
        description: "Review rápido de produtos em promoção.",
        src: v3.url,
        label: "Clique"
      },
      {
        title: "Comparativo Tech",
        description: "Destaque de specs para grupos de tecnologia.",
        src: v4.url,
        label: "Clique"
      },
      {
        title: "Suplementos e Saúde",
        description: "Ofertas focadas em performance e bem-estar.",
        src: v5.url,
        label: "Clique"
      },
      {
        title: "Bebidas e Energia",
        description: "Produtos de giro rápido para promoções relâmpago.",
        src: v6.url,
        label: "Clique"
      },
      {
        title: "Vídeo Demonstrativo",
        description: "Exemplo de conteúdo para engajamento no grupo.",
        src: v7.url,
        label: "Clique"
      },
      {
        title: "Review de Produto",
        description: "Análise visual sem narração, foco no produto.",
        src: v8.url,
        label: "Clique"
      },
      {
        title: "Tech e Gadgets",
        description: "Conteúdo focado em dispositivos Apple e eletrônicos.",
        src: v9.url,
        label: "Clique"
      },
      {
        title: "Economia no Supermercado",
        description: "Comparativo de preços e benefícios do grupo.",
        src: v10.url,
        label: "Clique"
      },
      {
        title: "Destaques Gerais",
        description: "Seleção das melhores oportunidades do dia.",
        src: v11.url,
        label: "Clique"
      },
      {
        title: "Outlet Nike",
        description: "Promoções exclusivas em calçados e vestuário.",
        src: v12.url,
        label: "Clique"
      }
    ],
  },
  {
    id: "apps-e-servicos",
    title: "Apps e Serviços",
    layout: "vertical",
    videos: [
      {
        title: "Omie",
        description: "Conteúdo UGC para plataforma de gestão empresarial.",
        src: a7.url,
        label: "Clique"
      },
      {
        title: "Open English",
        description: "Vídeo de divulgação para plataforma de idiomas.",
        src: a2.url,
        label: "Clique"
      },
      {
        title: "Gancho 1",
        description: "Abertura com gancho forte para retenção nos primeiros segundos.",
        src: a3.url,
        label: "Clique"
      },
      {
        title: "Gancho 2",
        description: "Versão alternativa de abertura com outro gancho.",
        src: a4.url,
        label: "Clique"
      },
      {
        title: "Gancho 1 — Variação",
        description: "Teste A/B de gancho para otimização de campanha.",
        src: a8.url,
        label: "Clique"
      },
      {
        title: "Vídeo com Legenda",
        description: "Conteúdo legendado para consumo sem som.",
        src: a1.url,
        label: "Clique"
      },
      {
        title: "Vídeo 1 com Legendas",
        description: "Versão legendada com foco em acessibilidade e retenção.",
        src: a9.url,
        label: "Clique"
      },
      {
        title: "Vídeo 1 — Corte 2",
        description: "Segundo corte com ritmo mais dinâmico.",
        src: a6.url,
        label: "Clique"
      },
      {
        title: "Formato Social",
        description: "Peça curta pensada para TikTok e Reels.",
        src: a5.url,
        label: "Clique"
      }
    ],
  },
];