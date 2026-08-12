import { Reveal } from "./Reveal";
import { VideoCardVertical } from "./VideoCardVertical";
import { VideoCardHorizontal } from "./VideoCardHorizontal";
import type { Niche } from "./niches";

export function NicheSection({ niche, index }: { niche: Niche; index: number }) {
  const isHorizontal = niche.layout === "horizontal";
  
  return (
    <div className="relative">
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-8 lg:gap-y-10 px-6 lg:px-12"
      >
        {niche.videos.map((video, i) => (
          <Reveal key={`${niche.id}-${i}-${video.src || video.youtubeId}`} delay={i * 50}>
            {isHorizontal ? (
              <VideoCardHorizontal {...video} />
            ) : (
              <VideoCardVertical {...video} />
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}