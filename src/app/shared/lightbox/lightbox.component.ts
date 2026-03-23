import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  HostListener,
  signal,
  computed,
  ElementRef,
  NgZone,
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { GalleryImage } from '../../core/data/images.data';

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_FACTOR = 1.12; // per wheel tick

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
})
export class LightboxComponent implements OnInit, OnDestroy {
  @Input() images: GalleryImage[] = [];
  @Input() startIndex = 0;
  @Output() closed = new EventEmitter<void>();

  currentIndex = signal(0);
  zoomLevel    = signal(1);
  panX         = signal(0);
  panY         = signal(0);
  isDragging   = signal(false);

  private _dragging  = false;
  private _lastX     = 0;
  private _lastY     = 0;
  private _didDrag   = false;
  private _wheelListener!: (e: WheelEvent) => void;

  readonly isZoomed = computed(() => this.zoomLevel() > 1);

  readonly imageStyle = computed(() => ({
    transform: `translate(${this.panX()}px, ${this.panY()}px) scale(${this.zoomLevel()})`,
    cursor: this.zoomLevel() > 1
      ? (this.isDragging() ? 'grabbing' : 'grab')
      : 'default',
    willChange: 'transform',
  }));

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  get current(): GalleryImage { return this.images[this.currentIndex()]; }
  get hasNext(): boolean { return this.currentIndex() < this.images.length - 1; }
  get hasPrev(): boolean { return this.currentIndex() > 0; }

  ngOnInit(): void {
    this.currentIndex.set(this.startIndex);
    document.body.style.overflow = 'hidden';

    // Register as non-passive so preventDefault() blocks page scroll
    this._wheelListener = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? ZOOM_FACTOR : 1 / ZOOM_FACTOR;
      this.ngZone.run(() => {
        this.zoomLevel.update(z => {
          const next = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, +(z * factor).toFixed(4)));
          if (next <= ZOOM_MIN) { this.panX.set(0); this.panY.set(0); }
          return next;
        });
      });
    };
    this.ngZone.runOutsideAngular(() => {
      this.el.nativeElement.addEventListener('wheel', this._wheelListener, { passive: false });
    });
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    this.el.nativeElement.removeEventListener('wheel', this._wheelListener);
  }

  next(): void {
    if (this.hasNext) { this.currentIndex.update(i => i + 1); this._resetTransform(); }
  }

  prev(): void {
    if (this.hasPrev) { this.currentIndex.update(i => i - 1); this._resetTransform(); }
  }

  close(): void { this.closed.emit(); }

  private _resetTransform(): void {
    this.zoomLevel.set(1);
    this.panX.set(0);
    this.panY.set(0);
  }

  onMouseDown(event: MouseEvent): void {
    if (!this.isZoomed()) return;
    event.preventDefault();
    this._dragging = true;
    this._didDrag  = false;
    this.isDragging.set(true);
    this._lastX = event.clientX;
    this._lastY = event.clientY;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this._dragging) return;
    const dx = event.clientX - this._lastX;
    const dy = event.clientY - this._lastY;
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) this._didDrag = true;
    this.panX.update(x => x + dx);
    this.panY.update(y => y + dy);
    this._lastX = event.clientX;
    this._lastY = event.clientY;
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    if (this._dragging) {
      this._dragging = false;
      this.isDragging.set(false);
      // Reset _didDrag after the click event fires
      setTimeout(() => { this._didDrag = false; }, 10);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowRight': this.next();           break;
      case 'ArrowLeft':  this.prev();           break;
      case 'Escape':     this.close();          break;
      case '0':          this._resetTransform(); break;
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if (this._didDrag) return;
    if ((event.target as HTMLElement).classList.contains('lightbox__backdrop')) {
      this.close();
    }
  }
}

