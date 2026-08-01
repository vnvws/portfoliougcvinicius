import type { VideoItem } from "./VideoCardVertical";

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
    videos: make(12, "Promo", "Vídeo vertical de divulgação com CTA direto para o grupo."),
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