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
// @ts-ignore
import sedaCollege from "@/assets/seda-college.mp4.asset.json";
// @ts-ignore
import autoAgente from "@/assets/auto-agente.mp4.asset.json";
// @ts-ignore
import visionCursor from "@/assets/vision-cursor.mp4.asset.json";
// @ts-ignore
import autoLoovi from "@/assets/videos/auto-loovi.mp4.asset.json";
// @ts-ignore
import autoHouseOfMotors from "@/assets/videos/auto-house-of-motors.mp4.asset.json";
// @ts-ignore
import autoRadnaqEspuma from "@/assets/videos/auto-radnaq-espuma.mp4.asset.json";
// @ts-ignore
import autoRadnaqOleo from "@/assets/videos/auto-radnaq-oleo.mp4.asset.json";

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
const a10 = sedaCollege as unknown as Asset;
const a11 = autoAgente as unknown as Asset;
const a12 = visionCursor as unknown as Asset;
const c1 = autoLoovi as unknown as Asset;
const c2 = autoHouseOfMotors as unknown as Asset;
const c3 = autoRadnaqEspuma as unknown as Asset;
const c4 = autoRadnaqOleo as unknown as Asset;

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
        title: "Promoções do Dia",
        description: "As melhores promoções da Black Friday",
        src: v1.url,
        label: "Clique"
      },
      {
        title: "A Promo Men",
        description: "Ofertas exclusivas durante a semana do consumidor",
        src: v2.url,
        label: "Clique"
      },
      {
        title: "A Promo Men",
        description: "Onde comprar tênis pagando barato",
        src: v3.url,
        label: "Clique"
      },
      {
        title: "Tem Promô",
        description: "Grupo exclusivo de promoções",
        src: v4.url,
        label: "Clique"
      },
      {
        title: "Urubu das Promos",
        description: "Creatina pagando barato",
        src: v5.url,
        label: "Clique"
      },
      {
        title: "Urubu das Promos",
        description: "Onde comprar energético barato",
        src: v6.url,
        label: "Clique"
      },
      {
        title: "Waves Outlet",
        description: "Sneakers do momento pagando pouco",
        src: v7.url,
        label: "Clique"
      },
      {
        title: "Rei da Promo",
        description: "Grupo com os melhores descontos da internet",
        src: v8.url,
        label: "Clique"
      },
      {
        title: "Tem Promô",
        description: "Grupo exclusivo de promoções",
        src: v9.url,
        label: "Clique"
      },
      {
        title: "Urubu das Promos",
        description: "Compras no mercado x no grupo",
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
        title: "Promoções do Dia",
        description: "Achado secreto de promoções",
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
        description: "Software de gestão completo para seu negócio",
        src: a7.url,
        label: "Clique"
      },
      {
        title: "Open English",
        description: "Aprender inglês nunca foi tão fácil",
        src: a2.url,
        label: "Clique"
      },
      {
        title: "Canva",
        description: "Criando um post em segundos com a IA do Canva",
        src: a3.url,
        label: "Clique"
      },
      {
        title: "WaSpeed",
        description: "Automatizando o seu atendimento no WhatsApp",
        src: a4.url,
        label: "Clique"
      },
      {
        title: "Canva",
        description: "Transformando foto em vídeo com a IA do Canva",
        src: a8.url,
        label: "Clique"
      },
      {
        title: "Inner AI",
        description: "Plataforma completa com mais de 50 IAs",
        src: a1.url,
        label: "Clique"
      },
      {
        title: "Lemon Cash",
        description: "Wallet híbrida multi moedas",
        src: a9.url,
        label: "Clique"
      },
      {
        title: "KalyFit",
        description: "App que conta calorias a partir de fotos",
        src: a6.url,
        label: "Clique"
      },
      {
        title: "My Dream Setup",
        description: "Site para montar seu setup virtualmente",
        src: a5.url,
        label: "Clique"
      },
      {
        title: "Seda College",
        description: "Aprenda inglês com 30 minutos por dia",
        src: a10.url,
        label: "Clique"
      },
      {
        title: "Auto Agente",
        description: "Pratique para prova do detran em casa",
        src: a11.url,
        label: "Clique"
      },
      {
        title: "Vision Cursor",
        description: "Personalise o cursor do seu mouse",
        src: a12.url,
        label: "Clique"
      }
    ],
  },
  {
    id: "automotivo",
    title: "Automotivo",
    layout: "vertical",
    videos: [
      {
        title: "LOOVI",
        description: "Seu carro segurado por um valor justo",
        src: c1.url,
        label: "Clique"
      },
      {
        title: "House Of Motors",
        description: "Tecnologia de limpeza a seco com carnaúba polimerizada",
        src: c2.url,
        label: "Clique"
      },
      {
        title: "Radnaq Automotive",
        description: "Espuma para limpeza de estofados",
        src: c3.url,
        label: "Clique"
      },
      {
        title: "Radnaq Automotive",
        description: "O óleo ideal para o motor do seu carro",
        src: c4.url,
        label: "Clique"
      }
    ],
  },
];