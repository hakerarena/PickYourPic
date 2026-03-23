import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GALLERY_IMAGES, GalleryImage } from '../../core/data/images.data';
import { FILMS, Film } from '../../core/data/films.data';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { LightboxComponent } from '../../shared/lightbox/lightbox.component';
import { FilmModalComponent } from '../../shared/film-modal/film-modal.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LightboxComponent, FilmModalComponent, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  heroImages = GALLERY_IMAGES.slice(0, 3);
  galleryImages = GALLERY_IMAGES.slice(0, 12);
  featuredFilms = FILMS.slice(0, 3);
  featuredTestimonials = TESTIMONIALS.slice(0, 3);

  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  activeFilm = signal<Film | null>(null);

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }

  openFilm(film: Film): void {
    this.activeFilm.set(film);
  }

  closeFilm(): void {
    this.activeFilm.set(null);
  }

  stats = [
    { value: '500+', label: 'Weddings Documented' },
    { value: '10+', label: 'Years of Experience' },
    { value: '15+', label: 'States Covered' },
    { value: '98%', label: 'Couples Delighted' },
  ];
}
