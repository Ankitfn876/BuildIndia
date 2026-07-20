import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { QuoteService } from '../../../core/services/quote.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private quoteService = inject(QuoteService);
  
  // Reactive UI signals
  isMobileMenuOpen = signal(false);
  isSearchOpen = signal(false);
  
  // Expose Signal data
  totalItemsCount = this.quoteService.totalItemsCount;

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(val => !val);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  toggleSearch() {
    this.isSearchOpen.update(val => !val);
  }
}
