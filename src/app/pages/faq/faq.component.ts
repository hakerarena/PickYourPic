import { Component, signal } from '@angular/core';
import { FAQ_ITEMS, FaqItem } from '../../core/data/faq.data';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

type Category = 'All' | 'General' | 'Pricing' | 'Process' | 'Destination';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  allItems = FAQ_ITEMS;
  activeCategory = signal<Category>('All');
  openId = signal<number | null>(null);

  categories: Category[] = ['All', 'General', 'Pricing', 'Process', 'Destination'];

  get filteredItems(): FaqItem[] {
    const cat = this.activeCategory();
    return cat === 'All' ? this.allItems : this.allItems.filter(i => i.category === cat);
  }

  setCategory(cat: Category): void {
    this.activeCategory.set(cat);
    this.openId.set(null);
  }

  toggle(id: number): void {
    this.openId.update(current => current === id ? null : id);
  }
}
