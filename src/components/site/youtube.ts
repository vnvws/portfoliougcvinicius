/**
 * Utilitários para extração de ID e geração de URLs do YouTube.
 * Suporta URLs normais, Shorts, embed, live e IDs crus.
 */

export function getYouTubeId(input: string | undefined | null): string | null {
  if (!input) return null;

  const url = input.trim();

  // Já é um ID cru (11 caracteres alfanuméricos, traço e underline)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/|youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*[?&]v=([a-zA-Z0-9_-]{11})/,
    /[?&]v=([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }

  return null;
}

export function getYouTubeThumbnail(
  id: string,
  quality: "maxresdefault" | "sddefault" | "hqdefault" | "mqdefault" = "maxresdefault",
): string {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

export function getYouTubeEmbedUrl(id: string, autoplay = false): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
    cc_load_policy: "0",
    cc_lang_pref: "pt",
    controls: "0",
    disablekb: "1",
    fs: "0",
    hl: "pt",
    widget_referrer: "https://youtube.com",
    origin: typeof window !== 'undefined' ? window.location.origin : '',
  });
  if (autoplay) params.set("autoplay", "1");
  // O parâmetro 'showinfo' foi descontinuado pelo YouTube, 
  // então usamos a técnica de 'crop' (aumento de escala) no componente para esconder o topo.
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}
