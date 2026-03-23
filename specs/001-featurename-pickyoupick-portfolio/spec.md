# Feature Specification: PickYourPic Wedding Photography Portfolio

**Feature Branch**: `001-pickyoupick-portfolio`  
**Created**: 2026-03-22  
**Status**: Approved  
**Input**: Build a multi-page Angular 17+ portfolio website for PickYourPic, a wedding photography startup active since 2015. Replica of pickyoupic.com with enhanced dark & moody UI, real images from pickyoupic.com/wp-content/uploads/, YouTube film modals, masonry gallery with lightbox, and all Lorem Ipsum replaced with meaningful wedding photography content.

## User Scenarios & Testing

### User Story 1 - Prospective Client Browses Portfolio (Priority: P1)

A newly engaged couple visits the website to evaluate PickYourPic as their wedding photographer. They want to see real wedding photographs before making contact.

**Why this priority**: The gallery is the core value proposition. Without compelling photos, no other page matters.

**Independent Test**: Navigate to `/` — see masonry gallery of real wedding photos. Click any photo to open full-screen lightbox with prev/next navigation.

**Acceptance Scenarios**:

1. **Given** the home page loads, **When** the gallery section is visible, **Then** 24 wedding photos appear in a 3-column masonry layout loaded from pickyoupic.com.
2. **Given** the masonry gallery, **When** any image is clicked, **Then** a full-screen lightbox opens with the image, close (×), previous (‹) and next (›) controls.
3. **Given** the lightbox is open, **When** the Escape key is pressed, **Then** the lightbox closes.
4. **Given** the lightbox is open, **When** arrow keys are pressed, **Then** it navigates between photos.

---

### User Story 2 - Client Watches Wedding Films (Priority: P2)

A prospective client wants to see wedding videography samples before deciding to book PickYourPic.

**Why this priority**: Video work is a key differentiator — clients who watch films convert at higher rates.

**Independent Test**: Navigate to `/wedding-films` — see film cards with thumbnails. Click any card to open a YouTube embed modal that autoplays.

**Acceptance Scenarios**:

1. **Given** the Wedding Films page, **When** it loads, **Then** 5 film cards appear with real thumbnail images from pickyoupic.com and a ▶ overlay button.
2. **Given** a film card, **When** the play button is clicked, **Then** a modal opens with an embedded YouTube player using a DomSanitizer-trusted URL that autoplays.
3. **Given** the film modal, **When** the backdrop is clicked or Escape is pressed, **Then** the modal closes.

---

### User Story 3 - Client Reads Wedding Stories Blog (Priority: P3)

A client wants to read real wedding stories to get inspired and see PickYourPic's storytelling style.

**Why this priority**: Blog content builds trust. Clients who engage with stories are more likely to enquire.

**Independent Test**: Navigate to `/wedding-stories` — see a grid of blog cards with real titles and category filter tabs.

**Acceptance Scenarios**:

1. **Given** the Wedding Stories page, **When** it loads, **Then** 9 blog cards appear with wedding thumbnails, real titles and excerpt text.
2. **Given** filter tabs (Most Popular / Gujarati / Destination / International), **When** a tab is clicked, **Then** only cards matching that category are shown.
3. **Given** all page text, **Then** no Lorem Ipsum placeholder text exists anywhere.

---

### User Story 4 - Client Submits Enquiry via Contact Form (Priority: P4)

A ready-to-book couple wants to submit their wedding details to receive a quote from PickYourPic.

**Why this priority**: Conversions happen through the contact form.

**Independent Test**: Navigate to `/contact` — fill the form with valid data and submit. See a success confirmation.

**Acceptance Scenarios**:

1. **Given** the contact form, **When** submitted empty, **Then** validation errors appear under every required field.
2. **Given** all required fields filled with valid data, **When** submitted, **Then** a success state is shown (form hides, confirmation message appears).
3. **Given** the email field, **When** an invalid email is entered, **Then** an inline error appears on blur.

---

### User Story 5 - Client Reviews Testimonials and FAQ (Priority: P5)

A hesitant client reads what past couples say and self-answers their questions before reaching out.

**Why this priority**: Social proof and FAQ reduce booking hesitation.

**Independent Test**: Navigate to `/testimonials` — see real review cards. On `/faq`, click accordion items to expand/collapse answers with animation.

**Acceptance Scenarios**:

1. **Given** the testimonials page, **When** it loads, **Then** 8 review cards appear with couple names, star ratings, location, and quote text.
2. **Given** the FAQ page, **When** a question header is clicked, **Then** the answer expands with an Angular animation. Clicking again collapses it.
3. **Given** any testimonial or FAQ text, **Then** no Lorem Ipsum exists.

---

### Edge Cases

- A pickyoupic.com image fails to load → `alt` text is shown; broken image placeholder applies.
- Form submission → Frontend-only success state (no backend); form resets after success.
- YouTube player fails to load in modal → Modal stays open safely; DomSanitizer prevents XSS.
- Unknown route → `**` wildcard redirects to `/`.
- `/couple-stories` → redirects to `/wedding-stories` (original URL 404s).

## Requirements

### Functional Requirements

- **FR-001**: All 8 navigation routes MUST be accessible: `/`, `/about`, `/wedding-stories`, `/wedding-films`, `/contact`, `/testimonials`, `/faq`. `/couple-stories` redirects to `/wedding-stories`.
- **FR-002**: Gallery images MUST load from `https://pickyoupic.com/wp-content/uploads/2025/07/` (24 images).
- **FR-003**: Film thumbnails MUST load from `https://pickyoupic.com/wp-content/uploads/2025/06/` (5 thumbnails, 5 YouTube IDs: jijigspIUHs, rIzH3iA5-S0, Vtt4uTsZZ6M, M4XfabZgspA, IXgrKturIiU).
- **FR-004**: The lightbox MUST support keyboard navigation (ArrowLeft, ArrowRight, Escape).
- **FR-005**: The film modal MUST use `DomSanitizer.bypassSecurityTrustResourceUrl()` for YouTube URLs.
- **FR-006**: The navbar MUST transition from transparent to solid `#1a1a1a` after 80px scroll.
- **FR-007**: The contact form MUST use `ReactiveFormsModule` with validators for all required fields.
- **FR-008**: The FAQ accordion MUST use `@angular/animations` `trigger('expandCollapse')`.
- **FR-009**: All page components MUST be lazy-loaded via `loadComponent` in `app.routes.ts`.
- **FR-010**: NO Lorem Ipsum text may appear anywhere in the final output.
- **FR-011**: All images MUST have descriptive `alt` attributes (WCAG AA).
- **FR-012**: The site MUST be responsive and functional at 375px viewport width.

### Key Entities

- **GalleryImage**: `{ url: string; alt: string; category?: string }`
- **Film**: `{ id: string; title: string; coupleNames: string; location: string; thumbnailUrl: string; youtubeId: string }`
- **BlogPost**: `{ id: number; title: string; excerpt: string; thumbnailUrl: string; category: string; date: string }`
- **Testimonial**: `{ id: number; coupleName: string; location: string; date: string; rating: number; quote: string }`
- **FaqItem**: `{ question: string; answer: string; category: string }`

## Success Criteria

- **SC-001**: `ng serve` and `ng build` complete with zero TypeScript errors.
- **SC-002**: All 7 routes (`/`, `/about`, `/wedding-stories`, `/wedding-films`, `/contact`, `/testimonials`, `/faq`) load without blank pages or console errors.
- **SC-003**: Gallery lightbox opens, prev/next navigates, Escape closes — fully keyboard-accessible.
- **SC-004**: Film modal embeds YouTube safely via DomSanitizer; closing modal stops playback.
- **SC-005**: Contact form shows validation errors on empty submit; shows success state on valid submit.
- **SC-006**: FAQ accordion animates open/close with `@angular/animations`.
- **SC-007**: Zero occurrences of "Lorem ipsum" in rendered HTML across all pages.
- **SC-008**: Navbar transitions from transparent to solid after scrolling 80px from top.
- **SC-009**: Site is fully usable on a 375px wide viewport (mobile).
- **SC-010**: All 24 gallery images have non-empty, descriptive `alt` attributes.
