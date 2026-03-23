import { MEDIA_BASE } from '../constants';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  thumbnailUrl: string;
  category: 'Most Popular' | 'Gujarati' | 'Destination' | 'International' | 'Punjabi' | 'South Indian';
  date: string;
  slug: string;
}

const B = MEDIA_BASE.uploads07;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Priya & Arjun: A Royal Jaipur Affair',
    excerpt: 'Amidst the pink walls of a Rajasthani palace, Priya and Arjun wrote their forever story. Every ritual glowed with marigolds, music, and five days of pure joy.',
    thumbnailUrl: B + 'DSC_4346-copy-Large.jpeg',
    category: 'Most Popular',
    date: '2025-02-14',
    slug: 'priya-arjun-jaipur-wedding',
  },
  {
    id: 2,
    title: 'Meera & Rohan: Love on Lake Pichola',
    excerpt: 'A floating palace, candlelit dinners, and a couple whose laughter echoed across the water. Udaipur had never looked so alive.',
    thumbnailUrl: B + 'DSC_4862-copy-Large.jpeg',
    category: 'Most Popular',
    date: '2025-01-20',
    slug: 'meera-rohan-udaipur-lake-wedding',
  },
  {
    id: 3,
    title: 'Ananya & Vikram: Mumbai\'s Most Intimate Celebration',
    excerpt: 'Sixty guests. One rooftop. A thousand memories. Ananya and Vikram chose intimacy over grandeur — and the result was breathtaking.',
    thumbnailUrl: B + 'DSC_8975-copy-Large.jpeg',
    category: 'Most Popular',
    date: '2024-12-10',
    slug: 'ananya-vikram-mumbai-intimate-wedding',
  },
  {
    id: 4,
    title: 'Neha & Harsh: A Traditional Gujarati Wedding in Ahmedabad',
    excerpt: 'From the vibrant garba to the sacred pheras, every moment of Neha and Harsh\'s Gujarati wedding was a celebration of culture, family, and love.',
    thumbnailUrl: B + '721A8034-copy-Large.jpeg',
    category: 'Gujarati',
    date: '2024-11-05',
    slug: 'neha-harsh-gujarati-wedding-ahmedabad',
  },
  {
    id: 5,
    title: 'Dhruvi & Parth: A Surat Navratri Wedding',
    excerpt: 'In the city of diamonds, Dhruvi and Parth celebrated their union with nine nights of garba and a wedding day that shone brighter than any jewel.',
    thumbnailUrl: B + 'DSC_2922-copy-Large.jpeg',
    category: 'Gujarati',
    date: '2024-10-18',
    slug: 'dhruvi-parth-surat-navratri-wedding',
  },
  {
    id: 6,
    title: 'Riya & Kabir: A Beachside Destination Wedding in Goa',
    excerpt: 'White sands, ocean breezes, and a couple who flew in guests from three continents. Riya and Kabir\'s Goa destination wedding was nothing short of cinematic.',
    thumbnailUrl: B + 'DSC_2573-Large.jpeg',
    category: 'Destination',
    date: '2024-09-22',
    slug: 'riya-kabir-goa-destination-wedding',
  },
  {
    id: 7,
    title: 'Aisha & Omar: A Singapore Love Story',
    excerpt: 'An Indian bride, a Malaysian groom, and a wedding that wove together two cultures in a seamless celebration of love in the city of gardens.',
    thumbnailUrl: B + 'DSC_0321-copy-Large.jpeg',
    category: 'International',
    date: '2024-08-15',
    slug: 'aisha-omar-singapore-international-wedding',
  },
  {
    id: 8,
    title: 'Kavya & Siddharth: A Coorg Monsoon Wedding',
    excerpt: 'Rain on a wedding day isn\'t bad luck — it\'s a blessing. Kavya and Siddharth danced in the mist of Coorg\'s coffee estates and proved it.',
    thumbnailUrl: B + 'DSC_4955-copy-Large.jpeg',
    category: 'Destination',
    date: '2024-07-08',
    slug: 'kavya-siddharth-coorg-monsoon-wedding',
  },
  {
    id: 9,
    title: 'Simran & Gurpreet: A Grand Punjabi Celebration in Amritsar',
    excerpt: 'Three days of bhangra, bangles, and blessings at the Golden City. Simran and Gurpreet\'s Punjabi wedding reminded us why we fell in love with this work.',
    thumbnailUrl: B + 'DSC_8492-copy-Large.jpeg',
    category: 'Punjabi',
    date: '2024-06-01',
    slug: 'simran-gurpreet-punjabi-wedding-amritsar',
  },
];

