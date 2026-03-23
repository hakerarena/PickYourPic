import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { BRAND, NAV_ITEMS } from '../../core/constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  readonly brand = BRAND;
  isScrolled = signal(false);
  menuOpen = signal(false);

  navItems = NAV_ITEMS;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 80);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
