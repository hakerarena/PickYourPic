import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'PickYourPic — Wedding Photography & Films',
  },
  {
    path: 'wedding-stories',
    loadComponent: () => import('./pages/wedding-stories/wedding-stories.component').then(m => m.WeddingStoriesComponent),
    title: 'Wedding Stories — PickYourPic',
  },
  {
    path: 'wedding-films',
    loadComponent: () => import('./pages/wedding-films/wedding-films.component').then(m => m.WeddingFilmsComponent),
    title: 'Wedding Films — PickYourPic',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us — PickYourPic',
  },
  {
    path: 'testimonials',
    loadComponent: () => import('./pages/testimonials/testimonials.component').then(m => m.TestimonialsComponent),
    title: 'Testimonials — PickYourPic',
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent),
    title: 'FAQ — PickYourPic',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact — PickYourPic',
  },
  { path: '**', redirectTo: '' },
];
