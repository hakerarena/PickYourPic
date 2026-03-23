import { Component, signal } from '@angular/core';
import { FILMS, Film } from '../../core/data/films.data';
import { FilmModalComponent } from '../../shared/film-modal/film-modal.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-wedding-films',
  standalone: true,
  imports: [FilmModalComponent, ScrollRevealDirective],
  templateUrl: './wedding-films.component.html',
  styleUrls: ['./wedding-films.component.scss'],
})
export class WeddingFilmsComponent {
  films = FILMS;
  activeFilm = signal<Film | null>(null);

  openFilm(film: Film): void {
    this.activeFilm.set(film);
  }

  closeFilm(): void {
    this.activeFilm.set(null);
  }
}
