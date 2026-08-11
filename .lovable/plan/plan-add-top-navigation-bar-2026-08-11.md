# Plan: Add Top Navigation Bar

I will implement a fixed top navigation bar featuring the portfolio niches to improve accessibility and user experience.

## User Request
- **Position**: Top of the page (fixed).
- **Style**: Thin black bar (#252525).
- **Content**: Clickable niche categories.
- **Color**: Green text (#7dff00).

## Technical Implementation
- **File**: `src/routes/index.tsx`.
- **Component**: `Index`.
- **Details**:
    - Add a `<nav>` element at the root of the `Index` component, outside the `FixedScale` wrapper to ensure it remains fixed at the top of the viewport.
    - Set background color to `#252525`.
    - Map through the `niches` array to generate navigation buttons.
    - Set text color to `#7dff00`.
    - Implement a `scrollToPortfolio` function to switch the active niche and scroll to the portfolio section when a link is clicked.
    - Adjust the top padding of the main content (`pt-12` to `pt-24`) to account for the new bar.
    - Ensure the navigation bar respects the project's custom cursor logic (`cursor-none`).
    - Use `z-[100]` to ensure it stays above other elements.

## Verification Plan
- Check the preview to verify the navigation bar is present at the top.
- Click on different niches in the top bar and confirm it scrolls to the portfolio section and updates the active niche correctly.
- Verify the colors match the request (#252525 background, #7dff00 text).
