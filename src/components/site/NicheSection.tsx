import { Reveal } from "./Reveal";
import { VideoCardVertical } from "./VideoCardVertical";
import { VideoCardHorizontal } from "./VideoCardHorizontal";
import type { Niche } from "./niches";

export function NicheSection({ niche, index }: { niche: Niche; index: number }) {
  const isHorizontal = niche.layout === "horizontal";
  
  return (
    <div className="relative">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10 px-4 sm:px-8 lg:px-12"
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