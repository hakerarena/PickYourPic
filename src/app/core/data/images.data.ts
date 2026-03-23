import { MEDIA_BASE } from '../constants';

export interface GalleryImage {
  url: string;
  alt: string;
  category?: string;
}

const BASE = MEDIA_BASE.uploads07;

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: BASE + 'DSC_4868-copy-Large.jpeg', alt: 'Bride and groom sharing a tender moment at golden hour', category: 'ceremony' },
  { url: BASE + 'DSC_4862-copy-Large.jpeg', alt: 'Wedding ceremony aisle adorned with marigold flowers', category: 'ceremony' },
  { url: BASE + 'DSC_4323-copy-Large.jpeg', alt: 'Elegant bridal portrait with traditional lehenga', category: 'portrait' },
  { url: BASE + 'DSC_4984-copy-Small.jpeg', alt: 'Couple sharing a laugh at the reception', category: 'reception' },
  { url: BASE + 'P8P_9941-copy-Large.jpeg', alt: 'Guests dancing on the wedding dance floor', category: 'reception' },
  { url: BASE + 'DSC_8975-copy-Large.jpeg', alt: 'Bride getting ready with her bridesmaids', category: 'preparation' },
  { url: BASE + 'DSC_8639-copy-Large.jpeg', alt: 'Groom with family during baraat procession', category: 'ceremony' },
  { url: BASE + '721A8034-copy-Large.jpeg', alt: 'Sacred wedding mandap decorated with flowers and diyas', category: 'ceremony' },
  { url: BASE + 'DSC_0993-Large.jpeg', alt: 'Romantic couple portrait at sunset', category: 'portrait' },
  { url: BASE + 'DSC_5778-copy-Small.jpeg', alt: 'Close-up of wedding rings on the bridal bouquet', category: 'details' },
  { url: BASE + 'DSC_8508-copy-Large.jpeg', alt: 'Grand reception venue with chandelier lighting', category: 'reception' },
  { url: BASE + 'DSC_8525-copy-Large.jpeg', alt: 'First dance — bride and groom under soft spotlight', category: 'reception' },
  { url: BASE + '721A7438-copy-Large.jpeg', alt: 'Detail shot of embroidered bridal lehenga fabric', category: 'details' },
  { url: BASE + 'DSC_4955-copy-Large.jpeg', alt: 'Couple walking hand-in-hand through a palace corridor', category: 'portrait' },
  { url: BASE + 'DSC_4106-copy-Large.jpeg', alt: 'Emotional exchange of wedding vows', category: 'ceremony' },
  { url: BASE + '2-copy-Large-4.jpeg', alt: 'Candid moment of couple laughing together', category: 'candid' },
  { url: BASE + 'DSC_0038-copy-Large.jpeg', alt: 'Heritage wedding venue exterior with floral decorations', category: 'venue' },
  { url: BASE + 'DSC_0019-copy-Large.jpeg', alt: 'Traditional pheras ritual around the sacred fire', category: 'ceremony' },
  { url: BASE + 'DSC_0321-copy-Large.jpeg', alt: 'Joyful family portrait after the ceremony', category: 'portrait' },
  { url: BASE + 'DSC_4350-copy-Large.jpeg', alt: 'Bride making her grand entry escorted by family', category: 'ceremony' },
  { url: BASE + 'DSC_8492-copy-Large.jpeg', alt: 'Vibrant baraat procession with dhol and dancing', category: 'ceremony' },
  { url: BASE + 'DSC_2922-copy-Large.jpeg', alt: 'Intimate mehndi ceremony with intricate henna designs', category: 'pre-wedding' },
  { url: BASE + 'DSC_2602-copy-Large.jpeg', alt: 'Sangeet night performance under string lights', category: 'pre-wedding' },
  { url: BASE + 'DSC_2573-Large.jpeg', alt: 'Silhouette of couple against a glowing dusk sky', category: 'portrait' },
];
