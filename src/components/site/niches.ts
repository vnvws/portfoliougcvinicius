import type { VideoItem } from "./VideoCardVertical";
import promoBlackFriday from "../assets/videos/promo-black-friday.mp4.asset.json";
import promoSemanaConsumidor from "../assets/videos/promo-semana-consumidor.mp4.asset.json";
import modaTenis from "../assets/videos/moda-tenis.mp4.asset.json";
import techComparativo from "../assets/videos/tech-comparativo.mp4.asset.json";
import alimentosCreatina from "../assets/videos/alimentos-creatina.mp4.asset.json";
import alimentosRedbull from "../assets/videos/alimentos-redbull.mp4.asset.json";
import video1 from "../assets/videos/video-1.mp4.asset.json";
import semLegenda from "../assets/videos/sem-legenda.mp4.asset.json";
import videoIphone from "../assets/videos/video-iphone.mov.asset.json";

export type Niche = {
  id: string;
  title: string;
  layout: "vertical" | "horizontal";
  videos: VideoItem[];
};

const make = (count: number, label: string, desc: string): VideoItem[] =>
  Array.from({ length: count }, (_, i) => ({
    title: `${label} #${String(i + 1).padStart(2, "0")}`,
    description: desc,
  }));

export const niches: Niche[] = [
  {
    id: "grupos-de-promocao",
    title: "Grupos de Promoção",
    layout: "vertical",
    videos: [
      {
        title: "Promo Black Friday",
        description: "Vídeo vertical de divulgação com CTA direto para o grupo.",
        src: promoBlackFriday.url,
        label: "Clique"
      },
      {
        title: "Semana do Consumidor",
        description: "Ofertas exclusivas com gatilhos de urgência.",
        src: promoSemanaConsumidor.url,
        label: "Clique"
      },
      {
        title: "Tênis e Ofertas",
        description: "Review rápido de produtos em promoção.",
        src: modaTenis.url,
        label: "Clique"
      },
      {
        title: "Comparativo Tech",
        description: "Destaque de specs para grupos de tecnologia.",
        src: techComparativo.url,
        label: "Clique"
      },
      {
        title: "Suplementos e Saúde",
        description: "Ofertas focadas em performance e bem-estar.",
        src: alimentosCreatina.url,
        label: "Clique"
      },
      {
        title: "Bebidas e Energia",
        description: "Produtos de giro rápido para promoções relâmpago.",
        src: alimentosRedbull.url,
        label: "Clique"
      },
      {
        title: "Vídeo Demonstrativo",
        description: "Exemplo de conteúdo para engajamento no grupo.",
        src: video1.url,
        label: "Clique"
      },
      {
        title: "Review de Produto",
        description: "Análise visual sem narração, foco no produto.",
        src: semLegenda.url,
        label: "Clique"
      },
      {
        title: "Tech e Gadgets",
        description: "Conteúdo focado em dispositivos Apple e eletrônicos.",
        src: videoIphone.url,
        label: "Clique"
      },
      ...make(3, "Promo", "Vídeo vertical de divulgação com CTA direto para o grupo."),
    ],
  },
  {
    id: "apps-e-servicos",
    title: "Apps e Serviços",
    layout: "vertical",
    videos: make(12, "App", "Demonstração de uso do app com narração e legenda dinâmica."),
  },
  {
    id: "carro-e-casa",
    title: "Carro e Casa",
    layout: "vertical",
    videos: make(4, "Casa & Carro", "Review de produto no ambiente real, luz natural."),
  },
  {
    id: "tech",
    title: "Tech",
    layout: "vertical",
    videos: make(8, "Tech", "Unboxing e testes de gadget com cortes rápidos."),
  },
  {
    id: "alimentos-e-bebidas",
    title: "Alimentos e Bebidas",
    layout: "vertical",
    videos: make(4, "Food", "Close-ups e som ambiente valorizando textura e sabor."),
  },
  {
    id: "autocuidado",
    title: "Autocuidado",
    layout: "vertical",
    videos: make(6, "Care", "Rotina de skincare com antes e depois honesto."),
  },
  {
    id: "moda",
    title: "Moda",
    layout: "vertical",
    videos: make(12, "Look", "Try-on com transições no beat e enquadramento de corpo inteiro."),
  },
  {
    id: "viagens",
    title: "Viagens",
    layout: "vertical",
    videos: make(4, "Trip", "Roteiro em formato diário, captação handheld."),
  },
  {
    id: "youtube",
    title: "YouTube",
    layout: "horizontal",
    videos: make(3, "YT", "Vídeo horizontal 16:9 com roteiro longo e edição narrativa."),
  },
];