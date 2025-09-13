# Project Optimization Notes

This document describes the performance and UX optimizations added to the project, and how to use/verify them.

## Changes Implemented

1. Lazy-load heavy animations
   - Animated background is now code-split and loaded lazily via `React.lazy` + `Suspense`.
   - File: `src/App.jsx`
   - Benefit: Reduces initial JS bundle size for faster first paint.

2. Respect reduced motion preference
   - Added `usePrefersReducedMotion` hook: `src/hooks/useReducedMotion.js`.
   - `AnimatedBackground` returns `null` when users prefer reduced motion.
   - In `App.jsx`, animation section is skipped when reduced motion is on.
   - Benefit: Accessibility-friendly and avoids unnecessary animation work.

3. IntersectionObserver cleanup improvements
   - `ScrollAnimation.jsx` now calls `observer.disconnect()` on cleanup.
   - Benefit: Prevents potential memory leaks and observer retention.

4. Smooth, efficient header scroll handling
   - Header uses `requestAnimationFrame` throttling and passive event listener.
   - File: `src/components/Header.jsx`.
   - Benefit: Smoother scroll performance with less main-thread contention.

5. Reduce re-renders of grid items
   - `SkillCard` wrapped with `React.memo`.
   - File: `src/components/SkillCard.jsx`.
   - Benefit: Avoids unnecessary re-renders for stable props.

## How to Verify

1. Bundle splitting
   - Run: `pnpm build` (or `npm run build`).
   - Check `dist/assets/*` for separate chunk containing the animated background.

2. Reduced motion
   - Enable OS setting: "Reduce Motion" (macOS/iOS) or Windows equivalent.
   - Reload the site: the animated background should not render.

3. Scroll performance
   - Open Performance tab in DevTools.
   - Scroll the page and look for fewer scroll handler long tasks.

4. Intersection animation
   - Scroll to sections with animated entries.
   - Ensure animations trigger once and do not re-trigger excessively.

## Notes / Future Ideas

- Consider using `prefetch` for lazily loaded chunks after idle time.
- Introduce image components with `loading="lazy"`/`decoding="async"` if/when `<img>` tags are added.
- Evaluate `framer-motion` for declarative animations (already in deps) if needed.
- Add `react-router` code splitting if routes are introduced.

## Files Touched

- `src/App.jsx` (lazy load, Suspense, reduced motion check)
- `src/hooks/useReducedMotion.js` (new)
- `src/components/AnimatedBackground.jsx` (respect reduced motion)
- `src/components/ScrollAnimation.jsx` (observer cleanup)
- `src/components/Header.jsx` (rAF + passive scroll)
- `src/components/SkillCard.jsx` (memoization)