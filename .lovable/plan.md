---
name: YouTube Migration Strategy
description: Plan to migrate video storage and playback from local assets to YouTube Shorts for better performance.
type: feature
---

# YouTube Migration Strategy

## Objectives
- Improve site performance and responsiveness on mobile devices.
- Reduce initial page load time and memory usage.
- Leverage YouTube's optimized streaming infrastructure.

## Proposed Changes
1. **Infrastructure**: Use the existing `InlineVideo.tsx` and `youtube.ts` which already support YouTube embedding.
2. **Data Model**: Update `niches.ts` to use `youtubeUrl` (Shorts) instead of local `src` assets.
3. **UI/UX**: Maintain the custom "UGC" aesthetic by using YouTube thumbnails as posters and custom play overlays.

## Performance Benefits
- **Offloaded Decoding**: YouTube handles video compression and adaptive bitrate streaming.
- **Lazy Loading**: YouTube iframes only initialize when needed.
- **Caching**: Leverages Google's global CDN.

## Implementation Steps
- Confirm YouTube Shorts URLs for all video items.
- Update `niches.ts` with new URLs.
- Verify `InlineVideo.tsx` correctly handles Shorts-specific URL formats via `youtube.ts`.
