# Responsive Refactoring Plan - UGC Portfolio

Objective: Replace the `FixedScale` (transform-based) miniaturization with a native responsive implementation for mobile and tablet, while keeping the desktop version (1024px+) pixel-identical to the current design.

## Technical Audit Findings

1. **FixedScale Logic**: Currently applies `transform: scale(innerWidth / 1440)` globally. This will be bypassed for screens < 1024px.
2. **Dependencies**: All sections in `index.tsx` use fixed widths (1240px) and grid layouts designed for 1440px.
3. **Artificial Reduction**: Hero font sizes (120px), 4-column grids, and large horizontal margins are being scaled down, leading to poor legibility and touch targets on mobile.
4. **Structural Needs**: Hero needs a vertical stack; Portfolio needs 2 columns; "Engagement" needs a native horizontal carousel.

## Phase 1: Infrastructure & FixedScale Bypass
- Modify `FixedScale.tsx` to return a normal fluid container on mobile/tablet (using CSS Media Queries or JS breakpoint detection).
- Ensure the desktop scale logic remains active only for screens >= 1024px if the design width (1440px) exceeds viewport, or simply disable it if the user prefers a standard max-width layout (User requested: "Desktop atual está APROVADO e deve permanecer PIXEL-IDENTICAL").

## Phase 2: Hero & Navigation Refactoring
- **Hero**: Use `flex-col` on mobile. Photo on top or center depending on best fit. Typography using `clamp()` for headline. Responsive Differentials (stack or wrap).
- **Navbar**: Implement horizontal touch scroll (`overflow-x: auto`) for niche links.

## Phase 3: Brand Marquee & About Section
- **Brands**: Make container fluid. Maintain continuous animation.
- **About**: Vertical layout (Image -> Text). Adjust font sizes for mobile legibility.

## Phase 4: Engagement Carousel
- Refactor `EngagementSection` from a 3-column grid to a native horizontal scroll (`scroll-snap-type: x mandatory`).

## Phase 5: Portfolio Grid & Tab Navigation
- **Grid**: Change `grid-cols-4` to `grid-cols-2` on mobile/tablet.
- **Nav**: Ensure the niche selector remains sticky and horizontally scrollable.
- **Layout**: Remove any fixed height reservations to ensure natural document flow when switching niches.

## Phase 6: Pricing & Feedbacks
- **Investment/Packages**: Adapt tables/cards to stack or scroll horizontally if too wide.
- **Feedbacks**: Adjust marquee card width to ~85vw for mobile legibility.

## Phase 7: Contact Form & Footer
- **Form**: Move from 2-column grid to single-column stack. Increase input font-size to 16px to prevent iOS auto-zoom.
- **Socials**: Ensure touch targets are at least 44x44px.

## Phase 8: Optimization & iOS Stability
- Remove redundant GPU layers (`translate3d`, `will-change`) that were added to combat scaling crashes.
- Verify native pinch-to-zoom works without crashing.

## Desktop Invariance Strategy
- All existing fixed-width classes (e.g., `w-[1240px]`) will be wrapped in `lg:` (e.g., `lg:w-[1240px] w-full px-6`).
- No changes to existing desktop-specific typography or colors.

## User Review Required
- Mobile Hero composition preference (Photo position).
- Specific breakpoints (Standard 768px/1024px vs others).
