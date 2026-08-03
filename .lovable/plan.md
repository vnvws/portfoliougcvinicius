# Plan - Fix iOS Crash and Memory Issues

The user is reporting that the site still crashes on iPhone after scrolling. The provided "System logs" screenshots confirm they are investigating the issue on their end. The crash is likely due to the browser's hardware decoder limit or memory exhaustion from having 60+ video elements.

## Proposed Changes

### 1. Ultra-Aggressive Video Memory Management
- **Modify `src/components/site/InlineVideo.tsx`**:
    - Change the logic so that the `<video>` tag is **only** rendered when `playing` is true.
    - When `playing` is false, show the `poster` image (or a generated thumbnail from the video URL if no poster is provided).
    - This ensures that while scrolling, there are **zero** active video decoders, and only when the user clicks to play does the browser initialize the video hardware.
    - Keep the `Lightbox` logic as is, but ensure it also cleans up properly.

### 2. Stabilize Layout Scaling on iOS
- **Modify `src/components/site/FixedScale.tsx`**:
    - Add a `ResizeObserver` specifically for the `inner` element to catch any height changes from late-loading images or videos.
    - Use `requestAnimationFrame` for all state updates to ensure they happen in sync with the browser's refresh rate.
    - Add a `useMemo` for the scale style to prevent unnecessary re-renders of the entire child tree.

### 3. CSS Performance
- **Modify `src/styles.css`**:
    - Add `content-visibility: auto` to sections that are far down the page to help the browser manage long documents.
    - Ensure `video-grid` items have `will-change: transform` only when necessary.

## Verification Plan
- I will check the preview to ensure videos still play when clicked.
- I will verify that the number of `<video>` elements in the DOM while scrolling is minimized.
- I will verify that the scaling is still functional.
