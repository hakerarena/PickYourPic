export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'Process' | 'Destination';
}

export const FAQ_ITEMS: FaqItem[] = [
  // General
  {
    id: 1,
    question: 'How long has PickYourPic been in business?',
    answer: 'PickYourPic was founded in 2015. Over the past decade we have documented more than 500 weddings across India and internationally, building a reputation for cinematic storytelling and quiet, unobtrusive presence.',
    category: 'General',
  },
  {
    id: 2,
    question: 'What style of photography do you specialise in?',
    answer: 'We specialise in candid, documentary-style wedding photography with a cinematic, dark and moody aesthetic. We capture real emotions as they happen — tears, laughter, stolen glances — rather than stiff posed shots. Editorial portraits are woven in naturally.',
    category: 'General',
  },
  {
    id: 3,
    question: 'How many photographers will be at our wedding?',
    answer: 'Our standard package includes two photographers working as a coordinated team — one focused on the couple and close family moments, the other documenting the broader scene. For larger weddings of 300+ guests or multi-venue ceremonies, we recommend our premium four-photographer team.',
    category: 'General',
  },
  {
    id: 4,
    question: 'Do you also shoot videos / wedding films?',
    answer: 'Yes. Our dedicated videography team creates cinematic short films (3–8 minutes) and full-length ceremony edits. Films can be booked as a standalone service or bundled with photography for a discounted rate. All films are delivered in 4K resolution.',
    category: 'General',
  },
  // Pricing
  {
    id: 5,
    question: 'What is your starting price for wedding photography?',
    answer: 'Our photography packages start at ₹80,000 for a single-day ceremony with two photographers and 500+ edited images. Full multi-day wedding packages with film, albums, and prints are priced on enquiry depending on guest count, duration, and location. Contact us for a personalised quote.',
    category: 'Pricing',
  },
  {
    id: 6,
    question: 'What does the package price include?',
    answer: 'All packages include: pre-wedding consultation, the shoot itself, full culling and post-processing, a private online gallery, and digital delivery of high-resolution images with personal printing rights. Albums, prints, and videography are available as add-ons.',
    category: 'Pricing',
  },
  {
    id: 7,
    question: 'Do you require a booking deposit?',
    answer: 'Yes, we require a 30% deposit to secure your wedding date. The balance is due one week before the wedding day. Deposits are non-refundable but fully transferable to a rescheduled date within 12 months if you give us at least 60 days notice.',
    category: 'Pricing',
  },
  {
    id: 8,
    question: 'Can we customise a package to fit our budget?',
    answer: 'Absolutely. We believe every couple deserves great wedding photography regardless of budget. Tell us your date, location, and budget and we will propose the best possible coverage for your needs. We would rather do something meaningful than not be there at all.',
    category: 'Pricing',
  },
  // Process
  {
    id: 9,
    question: 'How far in advance should we book?',
    answer: 'Wedding season (October–February) fills up very quickly. We recommend booking at least 6–9 months in advance for peak dates like December and February. Summer and monsoon dates can often be confirmed 3–4 months out. If your date is soon, contact us anyway — we may still be available.',
    category: 'Process',
  },
  {
    id: 10,
    question: 'Will you visit the venue before the wedding?',
    answer: 'For weddings within driving distance, one of our lead photographers will do a venue walkthrough 1–2 weeks before the wedding to scout light, identify key spots, and plan the day\'s flow. For destination weddings, we conduct a thorough video call venue review with your coordinator.',
    category: 'Process',
  },
  {
    id: 11,
    question: 'How long after the wedding will we receive our photos?',
    answer: 'You will receive a preview gallery of 50–75 curated images within 72 hours of your wedding — perfect for sharing on social media. The full edited gallery of 500–800+ images is delivered within 4 weeks. Rush delivery within 2 weeks is available at an additional fee.',
    category: 'Process',
  },
  {
    id: 12,
    question: 'How are the final photos delivered?',
    answer: 'All photos are delivered via a private, password-protected online gallery hosted for 12 months. From there you can download full-resolution images, share individual photos, or order prints and albums directly. We also provide a USB keepsake drive on request.',
    category: 'Process',
  },
  // Destination
  {
    id: 13,
    question: 'Do you travel for destination weddings?',
    answer: 'Yes — travel is one of our favourite parts of this work. We have documented weddings in Rajasthan, Goa, Kerala, Himachal Pradesh, and internationally in Singapore, Dubai, the UK, and the USA. Travel costs (flights, accommodation, per diem) are charged at actuals on top of the photography fee.',
    category: 'Destination',
  },
  {
    id: 14,
    question: 'Do you charge extra for international weddings?',
    answer: 'Our creative fee for international weddings is the same as domestic. You only pay additional costs for international flights, accommodation, visa (if required), and a modest daily travel allowance. We are transparent about all costs upfront and work hard to keep them minimal.',
    category: 'Destination',
  },
  {
    id: 15,
    question: 'Can you work with our local wedding coordinator at the destination?',
    answer: 'Absolutely — and we encourage it. A good local coordinator makes the photography better by ensuring the timeline runs on schedule. We share detailed shot lists and timelines in advance so everyone is aligned. We have worked seamlessly with coordinators across India and abroad.',
    category: 'Destination',
  },
  {
    id: 16,
    question: 'What if the weather is bad on our destination wedding day?',
    answer: 'Bad weather can create some of the most dramatic and memorable images. We come fully prepared with lighting equipment, weather-sealed cameras, and creative problem-solving. We have photographed rain-soaked Coorg weddings and foggy Himalayan elopements that turned out to be our most beautiful work.',
    category: 'Destination',
  },
];
