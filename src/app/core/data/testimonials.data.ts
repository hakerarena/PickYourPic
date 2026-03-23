export interface Testimonial {
  id: number;
  coupleName: string;
  location: string;
  weddingDate: string;
  avatarInitials: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    coupleName: 'Priya & Arjun',
    location: 'Jaipur, Rajasthan',
    weddingDate: 'February 2025',
    avatarInitials: 'P&A',
    rating: 5,
    quote: 'We cannot put into words how grateful we are to PickYourPic. Every candid shot, every teary moment, every burst of laughter — they caught it all. We look at these photos and relive the best day of our lives. Worth every single rupee and more.',
  },
  {
    id: 2,
    coupleName: 'Meera & Rohan',
    location: 'Udaipur, Rajasthan',
    weddingDate: 'January 2025',
    avatarInitials: 'M&R',
    rating: 5,
    quote: 'Hiring PickYourPic was the best wedding decision we made. The team was invisible during the ceremony — we forgot they were even there — but when we got the photos back, we were stunned. True professionals who understand storytelling.',
  },
  {
    id: 3,
    coupleName: 'Ananya & Vikram',
    location: 'Mumbai, Maharashtra',
    weddingDate: 'December 2024',
    avatarInitials: 'A&V',
    rating: 5,
    quote: 'Our wedding was intimate, and we were worried about how it would photograph. PickYourPic made our sixty-person celebration feel as grand as any palace wedding. The film they created — my mother watches it every week.',
  },
  {
    id: 4,
    coupleName: 'Neha & Harsh',
    location: 'Ahmedabad, Gujarat',
    weddingDate: 'November 2024',
    avatarInitials: 'N&H',
    rating: 5,
    quote: 'As a Gujarati family, our rituals are precious and complex. PickYourPic arrived having researched every ceremony. They knew exactly when to be close and when to give us space. Our garba photos are absolutely legendary.',
  },
  {
    id: 5,
    coupleName: 'Riya & Kabir',
    location: 'Goa',
    weddingDate: 'September 2024',
    avatarInitials: 'R&K',
    rating: 5,
    quote: 'We flew in guests from London, Dubai, and New York for our Goa wedding. PickYourPic delivered photos so beautiful that every single guest asked us for a print. Three continents, one incredible wedding, one incredible team.',
  },
  {
    id: 6,
    coupleName: 'Aisha & Omar',
    location: 'Singapore',
    weddingDate: 'August 2024',
    avatarInitials: 'A&O',
    rating: 5,
    quote: 'Getting married abroad was daunting but PickYourPic handled everything remotely with such professionalism. They understood both our Indian and Malaysian traditions beautifully. The photos bridge two worlds — exactly what we wanted.',
  },
  {
    id: 7,
    coupleName: 'Kavya & Siddharth',
    location: 'Coorg, Karnataka',
    weddingDate: 'July 2024',
    avatarInitials: 'K&S',
    rating: 5,
    quote: 'It rained all day and we were so upset. PickYourPic convinced us to step outside anyway. Those rain-soaked, misty coffee estate photos are now our absolute favourite images. They turned our worst fear into our greatest memory.',
  },
  {
    id: 8,
    coupleName: 'Simran & Gurpreet',
    location: 'Amritsar, Punjab',
    weddingDate: 'June 2024',
    avatarInitials: 'S&G',
    rating: 5,
    quote: 'A Punjabi wedding has a hundred moving moments across three days. PickYourPic never missed a single one. The anand karaj photos took our breath away. If you want photographers who truly feel your wedding, choose PickYourPic.',
  },
];
