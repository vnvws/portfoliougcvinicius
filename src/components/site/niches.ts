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
      }
    ],
  }
];