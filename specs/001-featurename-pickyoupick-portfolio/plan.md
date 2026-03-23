# Implementation Plan: PickYourPic Wedding Photography Portfolio

**Branch**: `001-pickyoupick-portfolio` | **Date**: 2026-03-22 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/001-featurename-pickyoupick-portfolio/spec.md`

## Summary

Build an 8-page Angular 21 standalone portfolio for PickYourPic, a wedding photography startup active since 2015. Features: full-viewport hero, CSS masonry gallery with custom lightbox, YouTube film modal (DomSanitizer-safe), IntersectionObserver scroll-reveal, ReactiveFormsModule contact form, @angular/animations FAQ accordion, dark moody theme (deep charcoal + champagne gold), all media sourced from live pickyoupic.com CDN URLs.

## Technical Context

**Language/Version**: TypeScript 5.x / Angular 21  
**Primary Dependencies**: @angular/animations, @angular/forms (Reactive), @angular/router  
**Storage**: None — static SPA, no backend  
**Testing**: Angular default (not focus of this feature)  
**Target Platform**: Web browser (Chrome, Firefox, Safari, Edge)  
**Project Type**: Single-page application with client-side routing  
**Performance Goals**: FCP < 2s; images lazy-loaded via CSS `loading="lazy"`  
**Constraints**: No external UI component libraries; all images from pickyoupic.com CDN  
**Scale/Scope**: 8 pages, ~25 components/directives, ~5 data files, ~1500 lines SCSS

## Constitution Check

- ✅ Angular 21 standalone components only — no NgModules
- ✅ SCSS with CSS custom properties on `:root`
- ✅ No external UI component libraries
- ✅ DomSanitizer for all YouTube iframe URLs
- ✅ Mobile-first responsive (375px, 768px, 1024px breakpoints)
- ✅ All images from `https://pickyoupic.com/wp-content/uploads/`
- ✅ WCAG AA: alt attributes, focus rings, keyboard nav
- ✅ Zero Lorem Ipsum in output

## Project Structure

```text
D:\Projects\PickYourPic\
├── specs/                                        # Spec Kit artifacts
│   └── 001-featurename-pickyoupick-portfolio/
│       ├── spec.md
│       ├── plan.md  ← this file
│       └── tasks.md
├── src/
│   ├── index.html                                # Google Fonts + meta
│   ├── styles.scss                               # Global theme tokens + resets
│   └── app/
│       ├── app.ts                                # Root component
│       ├── app.html                              # <app-navbar> + <router-outlet> + <app-footer>
│       ├── app.scss
│       ├── app.config.ts                         # provideRouter, provideAnimations
│       ├── app.routes.ts                         # 8 lazy loadComponent routes
│       ├── core/
│       │   └── data/
│       │       ├── images.data.ts                # GalleryImage[] — 24 photos
│       │       ├── films.data.ts                 # Film[] — 5 YouTube films
│       │       ├── stories.data.ts               # BlogPost[] — 9 posts, 4 categories
│       │       ├── testimonials.data.ts           # Testimonial[] — 8 reviews
│       │       └── faq.data.ts                   # FaqItem[] — 16 Q&As, 4 categories
│       ├── shared/
│       │   ├── navbar/
│       │   │   ├── navbar.component.ts
│       │   │   ├── navbar.component.html
│       │   │   └── navbar.component.scss
│       │   ├── footer/
│       │   │   ├── footer.component.ts
│       │   │   ├── footer.component.html
│       │   │   └── footer.component.scss
│       │   ├── lightbox/
│       │   │   ├── lightbox.component.ts         # Overlay, prev/next, Esc
│       │   │   ├── lightbox.component.html
│       │   │   └── lightbox.component.scss
│       │   └── film-modal/
│       │       ├── film-modal.component.ts       # DomSanitizer YouTube embed
│       │       ├── film-modal.component.html
│       │       └── film-modal.component.scss
│       ├── directives/
│       │   └── scroll-reveal.directive.ts        # IntersectionObserver fade-up
│       └── pages/
│           ├── home/
│           ├── about/
│           ├── wedding-stories/
│           ├── wedding-films/
│           ├── contact/
│           ├── testimonials/
│           └── faq/
├── angular.json
├── package.json
└── tsconfig.json
```

## Design Specification

### Color Palette (CSS Custom Properties)

```scss
:root {
  --color-bg:         #0d0d0d;    // Near-black page background
  --color-surface:    #1a1a1a;    // Navbar solid / card background
  --color-surface-2:  #242424;    // Elevated cards
  --color-gold:       #c9a84c;    // Primary brand accent — champagne gold
  --color-gold-light: #e8c96a;    // Gold hover state
  --color-text:       #f0ece4;    // Primary text — warm off-white
  --color-muted:      #8a8278;    // Secondary / caption text
  --color-border:     #2e2e2e;    // Subtle dividers
  --font-heading:     'Cormorant Garamond', serif;
  --font-body:        'Montserrat', sans-serif;
  --transition:       0.3s ease;
  --radius:           4px;
}
```

### Typography
- **Headings**: Cormorant Garamond, weight 300–400, letter-spacing 0.05–0.1em
- **Section labels**: 11px, uppercase, letter-spacing 0.2em, `var(--color-gold)`
- **Body**: Montserrat, weight 300–400, line-height 1.8

### Responsive Breakpoints
- `≤480px` — 1-column gallery, hamburger nav, stacked form
- `481px–768px` — 2-column gallery, condensed nav
- `769px–1024px` — 3-column gallery, full nav
- `≥1025px` — 3-column gallery, wider page padding

## Data Contracts

### Gallery Images (24 photos)
**Base URL**: `https://pickyoupic.com/wp-content/uploads/2025/07/`

| File | Alt Text |
|------|----------|
| DSC_4868-copy-Large.jpeg | Bride and groom at golden hour |
| DSC_4862-copy-Large.jpeg | Wedding ceremony aisle |
| DSC_4323-copy-Large.jpeg | Bridal portrait |
| DSC_4984-copy-Small.jpeg | Couple at reception |
| P8P_9941-copy-Large.jpeg | Wedding dance floor |
| DSC_8975-copy-Large.jpeg | Bride getting ready |
| DSC_8639-copy-Large.jpeg | Groom with family |
| 721A8034-copy-Large.jpeg | Wedding mandap ceremony |
| DSC_0993-Large.jpeg | Couple portrait at sunset |
| DSC_5778-copy-Small.jpeg | Wedding rings detail |
| DSC_8508-copy-Large.jpeg | Reception decoration |
| DSC_8525-copy-Large.jpeg | First dance |
| 721A7438-copy-Large.jpeg | Bridal lehenga detail |
| DSC_4955-copy-Large.jpeg | Couple walking together |
| DSC_4106-copy-Large.jpeg | Wedding vows moment |
| 2-copy-Large-4.jpeg | Candid couple laugh |
| DSC_0038-copy-Large.jpeg | Wedding venue exterior |
| DSC_0019-copy-Large.jpeg | Ceremony rituals |
| DSC_0321-copy-Large.jpeg | Family portrait |
| DSC_4350-copy-Large.jpeg | Bride entry |
| DSC_8492-copy-Large.jpeg | Baraat procession |
| DSC_2922-copy-Large.jpeg | Mehndi ceremony |
| DSC_2602-copy-Large.jpeg | Sangeet night |
| DSC_2573-Large.jpeg | Couple silhouette at dusk |

### Wedding Films (5 films)
**Thumbnail Base URL**: `https://pickyoupic.com/wp-content/uploads/2025/06/`

| YouTube ID | Thumbnail | Title | Couple | Location |
|-----------|-----------|-------|--------|----------|
| IXgrKturIiU | 1-1.jpg | A Love Written in the Stars | Priya & Arjun | Jaipur, Rajasthan |
| rIzH3iA5-S0 | 2-1.jpg | Where Two Worlds Became One | Meera & Rohan | Udaipur, Rajasthan |
| jijigspIUHs | 3-1.jpg | Forever Begins Today | Ananya & Vikram | Mumbai, Maharashtra |
| Vtt4uTsZZ6M | 4-1.jpg | The Promise We Made | Kavya & Siddharth | Bangalore, Karnataka |
| M4XfabZgspA | 5.jpg | Love Across Continents | Riya & Kabir | Goa |

### Contact Form Fields
All validated with `ReactiveFormsModule`:

| Field | Type | Validators |
|-------|------|-----------|
| firstName | text | required |
| lastName | text | required |
| email | email | required, email |
| phone | tel | optional |
| eventDate | date | required, future date (custom) |
| guestCount | number | required |
| eventType | select | required |
| weddingStyle | select | required |
| venueCity | text | required |
| howFound | select | required |
| message | textarea | required, minLength(20) |

## Page-by-Page Behaviour

| Page | Route | Key Sections |
|------|-------|-------------|
| Home | `/` | Hero, Film Strip, Masonry Gallery, About Teaser, Blog Preview, FAQ Teaser |
| About | `/about` | Hero, Origin Story, Team Cards, Stats Row |
| Wedding Stories | `/wedding-stories` | Category Filter Tabs, Blog Grid |
| Wedding Films | `/wedding-films` | Hero, Recent Films Carousel, Most Popular Grid |
| Contact | `/contact` | "Get in Touch" Hero, Reactive Form |
| Testimonials | `/testimonials` | Review Card Grid |
| FAQ | `/faq` | Category Groups, Animated Accordion |
| Couple Stories | `/couple-stories` | Redirect → `/wedding-stories` |
