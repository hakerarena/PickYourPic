import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Film } from '../../core/data/films.data';

@Component({
  selector: 'app-film-modal',
  standalone: true,
  imports: [],
  templateUrl: './film-modal.component.html',
  styleUrls: ['./film-modal.component.scss'],
})
export class FilmModalComponent implements OnInit, OnDestroy {
  @Input({ required: true }) film!: Film;
  @Output() closed = new EventEmitter<void>();

  embedUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const url = `https://www.youtube.com/embed/${this.film.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('film-modal__backdrop')) {
      this.close();
    }
  }
}
