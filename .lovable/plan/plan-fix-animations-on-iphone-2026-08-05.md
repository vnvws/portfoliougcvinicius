# Plan - Fix Animations on iPhone

The user reports that animations are not working on iPhone. This likely refers to the Marquee animations (Brands and Feedbacks) being stuck or the lack of scroll reveal animations that were previously removed but might be expected back.

## Proposed Changes

### 1. Global CSS Otimizations (`src/styles.css`)
- Fix invalid CSS: `perspective: 1000` -> `perspective: 1000px`.
- Remove `content-visibility: auto` from `.optimize-section`. While good for performance on Desktop, it is known to cause rendering and animation bugs in Safari iOS when combined with complex transforms and `FixedScale`.
- Ensure all `@keyframes` have `-webkit-` prefixes (already mostly there, but will double-check).
- Add a subtle global transition for smooth scaling adjustments.

### 2. Restore Reveal Animations (`src/components/site/Reveal.tsx`)
- Implement a simple, high-performance opacity and transform animation in the `Reveal` component.
- Use `useInView` (already defined in the file) to trigger the animation.
- This will address the "animations of these sections" part of the request if the user felt the site became too "static" after the previous removal.

### 3. Refine Marquee Components (`src/components/site/BrandMarquee.tsx` & `src/routes/index.tsx`)
- Ensure `will-change: transform` is used correctly.
- Add `translateZ(0)` or `translate3d(0,0,0)` to child elements to force GPU acceleration in Safari.

### 4. Adjust FixedScale (`src/components/site/FixedScale.tsx`)
- Remove `will-change: transform` from the main container if it's causing compositing issues on iOS (sometimes "hinting" too much on a large div can backfire).
- Ensure `WebkitTransform` is always synced.

## Verification Plan
- I will check the build output for any CSS errors.
- Since I cannot test on a real iPhone, I will rely on known "best practices" for Safari iOS animation stability:
    - Avoiding `content-visibility` on animated containers.
    - Correcting units in CSS properties.
    - Ensuring hardware acceleration hints are applied to the *moving* elements, not just the parent.
    - Validating that `Reveal` now actually applies CSS classes based on `inView` state.
