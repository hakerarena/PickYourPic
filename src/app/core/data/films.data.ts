import { MEDIA_BASE } from '../constants';

export interface Film {
  id: string;
  title: string;
  coupleNames: string;
  location: string;
  thumbnailUrl: string;
  youtubeId: string;
  year: number;
}

const BASE = MEDIA_BASE.uploads06;

export const FILMS: Film[] = [
  {
    id: 'film-1',
    title: 'A Love Written in the Stars',
    coupleNames: 'Priya & Arjun',
    location: 'Jaipur, Rajasthan',
    thumbnailUrl: BASE + '1-1.jpg',
    youtubeId: 'IXgrKturIiU',
    year: 2024,
  },
  {
    id: 'film-2',
    title: 'Where Two Worlds Became One',
    coupleNames: 'Meera & Rohan',
    location: 'Udaipur, Rajasthan',
    thumbnailUrl: BASE + '2-1.jpg',
    youtubeId: 'rIzH3iA5-S0',
    year: 2024,
  },
  {
    id: 'film-3',
    title: 'Forever Begins Today',
    coupleNames: 'Ananya & Vikram',
    location: 'Mumbai, Maharashtra',
    thumbnailUrl: BASE + '3-1.jpg',
    youtubeId: 'jijigspIUHs',
    year: 2025,
  },
  {
    id: 'film-4',
    title: 'The Promise We Made',
    coupleNames: 'Kavya & Siddharth',
    location: 'Bangalore, Karnataka',
    thumbnailUrl: BASE + '4-1.jpg',
    youtubeId: 'Vtt4uTsZZ6M',
    year: 2025,
  },
  {
    id: 'film-5',
    title: 'Love Across Continents',
    coupleNames: 'Riya & Kabir',
    location: 'Goa',
    thumbnailUrl: BASE + '5.jpg',
    youtubeId: 'M4XfabZgspA',
    year: 2025,
  },
];
