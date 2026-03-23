# PickYourPic Constitution

## Core Principles

### I. Angular 17+ Standalone Components (NON-NEGOTIABLE)
All components, directives, and pipes MUST use the standalone API (`standalone: true`).
No NgModules are to be created. Lazy loading via `loadComponent` in the router is required for every page-level component. This keeps the architecture modern, tree-shakeable, and aligned with Angular's future direction.

### II. SCSS with CSS Custom Properties
All styling is written in SCSS. Theme tokens (colors, fonts, spacing, transitions) MUST be defined as CSS custom properties on `:root` in `styles.scss`. No hard-coded hex values or pixel values outside of the token file. Component SCSS files import shared mixins/variables only — never redefine globals.

### III. No External UI Libraries
Zero third-party component libraries (no Angular Material, PrimeNG, Bootstrap, etc.). All UI (lightbox, modal, accordion, masonry, carousel) is implemented with plain CSS + Angular animation primitives. This keeps the bundle lean and the design fully custom.

### IV. Security-First Template Binding
Direct string interpolation into `[src]` or `[href]` of iframes is forbidden. All YouTube iframe `src` values MUST be sanitized via `DomSanitizer.bypassSecurityTrustResourceUrl()` before binding. No `innerHTML` bindings unless sanitized.

### V. Mobile-First Responsive Design
All layouts are designed mobile-first. Breakpoints: 480px (mobile), 768px (tablet), 1024px (laptop), 1280px+ (desktop). Every page must be fully usable at 375px viewport width. CSS Grid and Flexbox are preferred; media queries apply progressive enhancement.

### VI. External Media from pickyoupic.com
All photos and film thumbnails are linked directly from `https://pickyoupic.com/wp-content/uploads/`. No images are bundled into the repo. Image elements MUST have descriptive `alt` attributes for WCAG AA compliance. YouTube videos open in modal iframes — never embedded inline without user intent.

### VII. Accessibility (WCAG AA)
Every interactive element must be keyboard-navigable and have a visible focus ring. Color contrast ratios must meet WCAG AA (4.5:1 for normal text, 3:1 for large text). Modal/lightbox overlays must trap focus and support `Escape` to close. ARIA labels are required on icon-only buttons.

### VIII. Meaningful Content — No Placeholder Text
Every piece of visible copy must be purposeful and specific to wedding photography. All Lorem Ipsum must be replaced with real, human-readable content describing PickYourPic's services, story, and portfolio.

## Technology Stack

**Framework**: Angular 17+ (standalone)  
**Styling**: SCSS + CSS custom properties  
**Fonts**: Google Fonts — Cormorant Garamond (headings), Montserrat (body)  
**Routing**: `@angular/router` with `loadComponent` lazy routes  
**Forms**: `ReactiveFormsModule` for Contact page  
**Animations**: `@angular/animations` for FAQ accordion  
**Media Source**: `https://pickyoupic.com/wp-content/uploads/`  
**YouTube**: Embedded via `DomSanitizer`-trusted iframes  
**Build**: `ng build` (production), `ng serve` (development)

## Development Workflow

1. Spec Kit artifacts (constitution → spec → plan → tasks) are produced first, before any code.
2. Implementation follows `tasks.md` order: scaffold → theme → data → shared components → pages → routing → polish.
3. Each task is marked `[x]` in `tasks.md` immediately on completion.
4. `ng serve` must complete without errors after every phase.
5. No code is committed with TypeScript compiler errors.

## Governance

This constitution supersedes all other development practices for this project. Any deviation requires explicit documentation in the relevant spec or plan file. The spec-kit artifacts in `.specify/` are the single source of truth for intent; the source code is the implementation.

**Version**: 1.0.0 | **Ratified**: 2026-03-22 | **Last Amended**: 2026-03-22
