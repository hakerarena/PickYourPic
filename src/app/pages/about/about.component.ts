import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { GALLERY_IMAGES } from '../../core/data/images.data';
import { COPY } from '../../core/constants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  teamPhoto    = GALLERY_IMAGES[5].url;
  teamPhotoAlt = GALLERY_IMAGES[5].alt;
  stats        = COPY.stats;

  values = [
    { icon: '✦', title: 'Authenticity', desc: 'We document moments as they happen — real emotions, real connections, no staging.' },
    { icon: '✦', title: 'Craftsmanship', desc: 'Every image is carefully composed and edited. We treat your wedding album like fine art.' },
    { icon: '✦', title: 'Discretion', desc: 'We are present everywhere but seen nowhere. You focus on celebrating; we handle the rest.' },
    { icon: '✦', title: 'Storytelling', desc: "A gallery is not a collection of random shots. We build a visual narrative with a beginning, middle, and end." },
  ];
}
