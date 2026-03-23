import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../core/data/testimonials.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = TESTIMONIALS;
}
