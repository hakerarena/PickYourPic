# Tasks: PickYourPic Wedding Photography Portfolio

**Input**: Design documents from `specs/001-featurename-pickyoupick-portfolio/`
**Prerequisites**: plan.md ✅ | spec.md ✅

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel with other [P] tasks (no file dependencies)
- **[Story]**: User story reference (US1–US5 or SHARED)

---

## Phase 1: Setup — Global Theme & Data Layer

**Purpose**: Global tokens and typed data arrays that every component depends on.

- [x] T001 [SHARED] Scaffold Angular project with `ng new` — standalone, routing, SCSS ✅
- [ ] T002 [SHARED] Rewrite `src/index.html` — add Google Fonts (Cormorant Garamond + Montserrat), charset, viewport meta, favicon, SEO meta description "PickYourPic — Wedding Photography & Films Since 2015"
- [ ] T003 [SHARED] Rewrite `src/styles.scss` — CSS custom properties (`:root`), global reset, typography scale, utility classes (`.section-label`, `.btn-primary`, `.btn-outline`, `.fade-up`, `.revealed`), scroll-reveal keyframes, custom scrollbar
- [ ] T004 [P][SHARED] Create `src/app/core/data/images.data.ts` — export `GALLERY_IMAGES: GalleryImage[]` with 24 entries, each with `url` (full pickyoupic.com path) and `alt` text
- [ ] T005 [P][SHARED] Create `src/app/core/data/films.data.ts` — export `FILMS: Film[]` with 5 entries (id, title, coupleNames, location, thumbnailUrl, youtubeId)
- [ ] T006 [P][SHARED] Create `src/app/core/data/stories.data.ts` — export `BLOG_POSTS: BlogPost[]` with 9 posts across 4 categories (Most Popular, Gujarati, Destination, International)
- [ ] T007 [P][SHARED] Create `src/app/core/data/testimonials.data.ts` — export `TESTIMONIALS: Testimonial[]` with 8 real-feeling client reviews (names, ratings, locations, meaningful quotes)
- [ ] T008 [P][SHARED] Create `src/app/core/data/faq.data.ts` — export `FAQ_ITEMS: FaqItem[]` with 16 questions across 4 categories (General, Pricing, Process, Destination)

---

## Phase 2: Shared Components & Directive

**Purpose**: Reusable components used across all pages — must be complete before any page work.

**⚠️ BLOCKING**: Pages T013–T032 cannot be started until T009–T013 are complete.

- [ ] T009 [SHARED] Build `src/app/shared/navbar/navbar.component.{ts,html,scss}` — standalone, transparent at top → solid `#1a1a1a` after 80px scroll (`HostListener('window:scroll')`), hamburger toggle for mobile (<768px), 8 nav links (Home, About, Wedding Stories, Wedding Films, Couple Stories, Contact, Testimonials, FAQ), phone number `(+91) 8467013857`, active route highlighting with `routerLinkActive`
- [ ] T010 [P][SHARED] Build `src/app/shared/footer/footer.component.{ts,html,scss}` — standalone, PickYourPic logo text, 3-column nav links, contact info (phone, email placeholder), Instagram/YouTube/Facebook SVG icon links, copyright line "© 2026 PickYourPic. All rights reserved."
- [ ] T011 [P][SHARED] Build `src/app/shared/lightbox/lightbox.component.{ts,html,scss}` — standalone, `@Input() images: GalleryImage[]`, `@Input() startIndex: number`, `@Output() close = new EventEmitter()`, full-screen fixed overlay, prev/next arrow buttons, `@HostListener('keydown')` for ArrowLeft/ArrowRight/Escape, ARIA role="dialog", focus trap
- [ ] T012 [P][SHARED] Build `src/app/shared/film-modal/film-modal.component.{ts,html,scss}` — standalone, `@Input() film: Film | null`, inject `DomSanitizer`, compute `safeUrl = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + film.youtubeId + '?autoplay=1')`, backdrop click and Escape key close via `@Output() close`, responsive iframe (16:9 aspect ratio)
- [ ] T013 [P][SHARED] Create `src/app/directives/scroll-reveal.directive.ts` — standalone attribute directive `[appScrollReveal]`, uses `IntersectionObserver` to add `.revealed` class to host element when it enters the viewport (threshold: 0.15), runs `ngOnDestroy` cleanup

**Checkpoint**: Shared layer complete — all 8 pages can now be implemented.

---

## Phase 3: US1 — Home Page (Priority: P1) 🎯 MVP

**Goal**: Prospective clients browse the full portfolio on the home page.

**Independent Test**: Navigate to `/` — hero renders, film strip links to YouTube modals, masonry gallery opens lightbox on click.

- [ ] T014 [US1] Create `src/app/pages/home/home.component.{ts,html,scss}` skeleton — standalone, imports `LightboxComponent`, `FilmModalComponent`, `ScrollRevealDirective`, `RouterLink`; inject data arrays; maintain `lightboxOpen`, `lightboxIndex`, `activeFilm` state
- [ ] T015 [US1] Implement **Hero section** in HomeComponent — full-viewport background image (`DSC_4346-copy-Large.jpeg`), dark overlay, "Beautiful Weddings, Breathtaking Films" H1 (Cormorant Garamond), subheading "Capturing the emotion, the laughter, and the love — one frame at a time.", gold CTA button → `/contact`, scroll-down arrow indicator
- [ ] T016 [US1] Implement **Films preview strip** — horizontal scroll row of 5 film thumbnail cards, each with couple name, location, ▶ overlay button; click → set `activeFilm` to open FilmModalComponent
- [ ] T017 [US1] Implement **Masonry gallery section** — heading "Moments Captured In Every Frame", CSS `columns: 3 / 2 / 1` responsive, 24 `GalleryImage` items, each with `loading="lazy"`, hover scale + gold border effect; click → set `lightboxIndex` and `lightboxOpen = true`
- [ ] T018 [US1] Implement **About teaser section** — "Capturing Stories, In The Lense Since 2015" section label, brief 2-sentence origin story paragraph, "Meet Our Team" link → `/about`
- [ ] T019 [US1] Implement **Blog preview section** — "Love Stories, Captured" heading, 3 BlogPost cards (latest: one Gujarati, one Destination, one International), each card with thumbnail, category badge, title, excerpt, "Read More" link → `/wedding-stories`
- [ ] T020 [US1] Implement **FAQ teaser section** — "Still Deciding? Let Us Answer" heading, 3 inline accordion items (Why choose us? / What makes you different? / Do you cover destination weddings?), gold "Read All FAQs" CTA → `/faq`; wire `appScrollReveal` to all sections

---

## Phase 4: US2 — Wedding Films Page (Priority: P2)

**Goal**: Clients watch all 5 wedding films in a modal from a dedicated films page.

- [ ] T021 [US2] Create `src/app/pages/wedding-films/wedding-films.component.{ts,html,scss}` — standalone, imports `FilmModalComponent`, `ScrollRevealDirective`, `RouterLink`; inject `FILMS` data; "Capturing Stories, In The Lense Since 2015" hero text section
- [ ] T022 [US2] Implement **Recent Films** carousel section — horizontal scroll of 5 film cards (thumbnail, title, couple names, location, ▶ overlay); click → `FilmModalComponent`
- [ ] T023 [US2] Implement **Most Popular** grid section — same film cards in a 2–3 column CSS grid

---

## Phase 5: US3 — Wedding Stories Page (Priority: P3)

**Goal**: Clients browse and filter wedding blog posts by category.

- [ ] T024 [US3] Create `src/app/pages/wedding-stories/wedding-stories.component.{ts,html,scss}` — standalone, imports `NgFor`, `NgIf`, `ScrollRevealDirective`; inject `BLOG_POSTS`; `activeCategory = 'Most Popular'` state
- [ ] T025 [US3] Implement **Most Popular** section — heading, 3-post grid; implement **By Culture** category tabs (Gujarati, Punjabi, South Indian, Marathi) each showing filtered posts; implement **International Weddings** section; implement **Destination Weddings** section

---

## Phase 6: US4 — Contact Page (Priority: P4)

**Goal**: Clients submit enquiry with validated form fields.

- [ ] T026 [US4] Create `src/app/pages/contact/contact.component.{ts,html,scss}` — standalone, imports `ReactiveFormsModule`; inject `FormBuilder`; define `enquiryForm: FormGroup` with all 11 fields and validators
- [ ] T027 [US4] Add custom `futureDateValidator` function (validates `eventDate` is not in the past)
- [ ] T028 [US4] Implement contact form template — "Get in Touch! Let's Frame Your Big Day" hero, 2-column grid (firstName/lastName, email/phone), date field, guest count, selects for eventType/weddingStyle/howFound, venueCity, message textarea; inline validation error messages
- [ ] T029 [US4] Implement `onSubmit()` handler — mark-all-touched on invalid, set `submitted = true` + `submitSuccess = true` on valid, show gold success banner "Thank you! We'll be in touch within 24 hours.", reset form

---

## Phase 7: US5 — Testimonials & FAQ Pages (Priority: P5)

**Goal**: Social proof cards and animated FAQ accordion.

- [ ] T030 [US5] Create `src/app/pages/testimonials/testimonials.component.{ts,html,scss}` — standalone, inject `TESTIMONIALS`; render 8 review cards each with star-rating SVG (filled/empty based on `rating`), couple name, wedding location + date, blockquote with meaningful quote text; `appScrollReveal` on each card
- [ ] T031 [US5] Create `src/app/pages/faq/faq.component.{ts,html,scss}` — standalone, imports `NgFor`, `NgIf`, Angular animations; inject `FAQ_ITEMS`; group by category; implement `trigger('expandCollapse', [state('open', style({height: '*', opacity: 1})), state('closed', style({height: '0', opacity: 0})), transition('open <=> closed', animate('300ms ease'))])` accordion; click to toggle open/closed per question

---

## Phase 8: About Page

- [ ] T032 Create `src/app/pages/about/about.component.{ts,html,scss}` — standalone, "Capturing Stories, In The Lense Since 2015" full-viewport hero with video/photo background; 2-paragraph origin story ("We started PickYourPic in 2015 with one camera and an unwavering belief that every love story deserves to be told beautifully..."); 3 team cards (Rajan Mehta – Lead Photographer, Priya Sharma – Cinematographer, Aditya Kumar – Photo Editor) with placeholder team portrait style; animated stats row: 300+ Weddings | 10+ Years | 50+ Cities | 15+ Awards; `appScrollReveal` throughout

---

## Phase 9: Routing & App Shell

- [ ] T033 Rewrite `src/app/app.routes.ts` — 8 lazy `loadComponent` routes:
  - `''` → `HomeComponent`
  - `'about'` → `AboutComponent`
  - `'wedding-stories'` → `WeddingStoriesComponent`
  - `'wedding-films'` → `WeddingFilmsComponent`
  - `'contact'` → `ContactComponent`
  - `'testimonials'` → `TestimonialsComponent`
  - `'faq'` → `FaqComponent`
  - `'couple-stories'` → redirect to `'wedding-stories'`
  - `'**'` → redirect to `''`
- [ ] T034 Rewrite `src/app/app.config.ts` — `provideRouter(routes, withViewTransitions())`, `provideAnimations()`, `withComponentInputBinding()`
- [ ] T035 Rewrite `src/app/app.ts` + `src/app/app.html` — minimal root component importing `NavbarComponent`, `RouterOutlet`, `FooterComponent`; template: `<app-navbar />`, `<main><router-outlet /></main>`, `<app-footer />`

---

## Phase 10: Polish & QA

- [ ] T036 [P] Responsive CSS pass — verify gallery 1-col at ≤480px, 2-col at 481–768px, 3-col at ≥769px; contact form stacks vertically on mobile; film cards horizontal scroll on mobile; text sizes readable at 375px
- [ ] T037 [P] Accessibility pass — verify all `<img>` have non-empty `alt`; icon buttons have `aria-label`; lightbox traps focus; modal closes on Escape; color contrast ≥4.5:1 on body text
- [ ] T038 Zero Lorem Ipsum verification — grep all `.html` and `.ts` files in `src/` for "lorem" (case-insensitive); fix any occurrences found

---

## Completion Checklist

- [ ] `ng build` produces zero TypeScript/template errors
- [ ] All 7 routes load without blank screens or console errors
- [ ] Gallery lightbox: opens on click, prev/next navigates, Escape closes ✅
- [ ] Film modal: YouTube plays via DomSanitizer URL, backdrop closes modal ✅
- [ ] Contact form: validation errors on empty submit, success state on valid ✅
- [ ] FAQ accordion: expands/collapses with Angular animation ✅
- [ ] Zero "Lorem ipsum" in any rendered page ✅
- [ ] Navbar solid after 80px scroll ✅
- [ ] Site fully usable at 375px viewport ✅
- [ ] All images have non-empty `alt` attributes ✅
