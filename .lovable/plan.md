# Mobile Optimization & Performance Audit Plan

Based on the `lovable-mobile-optimizer` skill, I have audited the project and designed a 4-phase optimization plan. The goal is to maximize performance on iOS Safari and Android Chrome without altering the visual design.

## Phase 1: Asset Cleanup (Bundle Size Reduction)
Identify and remove orphan assets and optimize large images.
- **Identified Orphans:** `blue-logo.png`, `design_sem_nome_1.png`, multiple placeholder photos in `src/assets/photos/`, `auto-radnaq-oleo.mp4` in `src/assets/videos/`.
- **Action:** Delete these files to reduce the final build size and speed up git/deployment.

## Phase 2: Parity & Smoothness (60FPS Goal)
Ensure all desktop effects work fluidly on mobile.
- **Animations:** Verify `Reveal` and `BrandMarquee` components use hardware acceleration (`translate3d`, `will-change`).
- **Touch Interactions:** Ensure `NeonCursor` is correctly hidden on touch devices (already present, will verify).
- **Responsive Classes:** Add `active:` variants to buttons that currently only have `hover:`.

## Phase 3: Scroll & Layout Bugs
Fix common "white gap" or "stuck scroll" issues on mobile.
- **Viewport Units:** Replace `100vh` with `100dvh` in `LoadingScreen.tsx` and `index.tsx` where applicable to handle dynamic browser toolbars.
- **Safe Areas:** Ensure `TopNav` (within `Nav`) and `BackToTop` respect `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
- **Overflow:** Check for horizontal scroll leaks on small screens (likely caused by fixed-width elements like `360px` feedback cards).

## Phase 4: Video Optimization (Data & CPU)
Refine the "thumbnail + click-to-play" strategy.
- **Dynamic Mounting:** The current `InlineVideo.tsx` already uses `IntersectionObserver` and `hasStartedLoading`. I will refine it to use `preload="none"` before the first interaction.
- **Poster Frames:** Ensure `#t=1.5` fallback works reliably for all native videos to avoid black frames.
- **YouTube Prefetch:** Implement a lightweight "fake" iframe (thumbnail only) that only injects the real heavy YouTube player on click.

---
**Verification:** I will run `npm run build` after each phase to ensure no regressions.
