// ============================================================
// Shared Application Constants
// Single source of truth for all standalone string/value literals
// ============================================================

// ------------------------------------------------------------------
// Brand
// ------------------------------------------------------------------
export const BRAND = {
  name: 'PickYourPic',
  tagline: 'Wedding Photography & Films',
  taglineSub: 'Since 2015',
  foundedYear: 2015,
  logoUrl: 'https://pickyoupic.com/wp-content/uploads/2025/06/pyp-l.png',
  logoAlt: 'PickYourPic — Wedding Photography & Films',
  awardBadgeUrl: 'https://pickyoupic.com/wp-content/uploads/2025/06/APW-2.png',
  siteUrl: 'https://pickyoupic.com',
} as const;

// ------------------------------------------------------------------
// Contact
// ------------------------------------------------------------------
export const CONTACT = {
  phone: '+916394237652',
  phoneDisplay: '(+91) 63942 37652',
  email: 'ceopyp@gmail.com',
  location: 'India & Worldwide',
  whatsappUrl: 'https://wa.me/916394237652',
  studioHours: [
    { days: 'Monday – Sunday', hours: '10 AM – 7 PM IST' },
  ],
} as const;

// ------------------------------------------------------------------
// Social Media
// ------------------------------------------------------------------
export const SOCIAL = {
  instagram: 'https://www.instagram.com/pickyoupic/',
  youtube: 'https://www.youtube.com/@pickyoupic',
  facebook: 'https://www.facebook.com/pickyoupic',
} as const;

// ------------------------------------------------------------------
// Media — CDN base paths
// ------------------------------------------------------------------
export const MEDIA_BASE = {
  uploads06: 'https://pickyoupic.com/wp-content/uploads/2025/06/',
  uploads07: 'https://pickyoupic.com/wp-content/uploads/2025/07/',
} as const;

// ------------------------------------------------------------------
// Page copy (section labels / hero strings used across pages)
// ------------------------------------------------------------------
export const COPY = {
  sectionLabels: {
    contact:       'Get In Touch',
    about:         'About Us',
    ourStory:      'Our Story',
    philosophy:    'Our Philosophy',
    gallery:       'Our Work',
    films:         'Wedding Films',
    testimonials:  'Kind Words',
    faq:           'Questions',
    since:         'Since 2015',
  },
  stats: [
    { value: '500+', label: 'Weddings' },
    { value: '10+',  label: 'Years' },
    { value: '12',   label: 'States' },
    { value: '100%', label: 'Love' },
  ],
  services: [
    'Wedding Photography',
    'Wedding Films',
    'Pre-Wedding Shoot',
    'Destination Weddings',
  ],
} as const;

// ------------------------------------------------------------------
// Navigation
// ------------------------------------------------------------------
export const NAV_ITEMS = [
  { label: 'Home',            path: '/' },
  { label: 'Wedding Stories', path: '/wedding-stories' },
  { label: 'Wedding Films',   path: '/wedding-films' },
  { label: 'About',           path: '/about' },
  { label: 'Testimonials',    path: '/testimonials' },
  { label: 'FAQ',             path: '/faq' },
] as const;
