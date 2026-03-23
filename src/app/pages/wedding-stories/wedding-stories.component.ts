import { Component, signal, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BLOG_POSTS, BlogPost } from '../../core/data/stories.data';
import { GALLERY_IMAGES, GalleryImage } from '../../core/data/images.data';
import { LightboxComponent } from '../../shared/lightbox/lightbox.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

type Category = 'All' | 'Most Popular' | 'Gujarati' | 'Destination' | 'International' | 'Punjabi' | 'South Indian';

@Component({
  selector: 'app-wedding-stories',
  standalone: true,
  imports: [LightboxComponent, ScrollRevealDirective, DatePipe],
  templateUrl: './wedding-stories.component.html',
  styleUrls: ['./wedding-stories.component.scss'],
})
export class WeddingStoriesComponent {
  allPosts = BLOG_POSTS;
  galleryImages = GALLERY_IMAGES;
  activeCategory = signal<Category>('All');
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);

  categories: Category[] = ['All', 'Most Popular', 'Gujarati', 'Destination', 'International', 'Punjabi'];

  filteredPosts = computed(() => {
    const cat = this.activeCategory();
    return cat === 'All' ? this.allPosts : this.allPosts.filter(p => p.category === cat);
  });

  setCategory(cat: Category): void {
    this.activeCategory.set(cat);
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }
}
