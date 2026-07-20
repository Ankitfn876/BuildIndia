import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { FeatureCardComponent } from '../../shared/components/feature-card/feature-card.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    FeatureCardComponent,
    ProductCardComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private productService = inject(ProductService);

  // Load datasets into Signals
  readonly bestSellers = signal<Product[]>(this.productService.getFeaturedProducts());

  // Quick categories metadata
  categories = [
    { name: 'Sariya', count: 'Premium TMT', icon: 'fa-solid fa-link', img: '/assets/Sariya-tmt.jpeg' },
    { name: 'Sand', count: 'Double washed', icon: 'fa-solid fa-water', img: '/assets/Sand-Balu.jpeg' },
    { name: 'Cement', count: 'OPC 53 Grade', icon: 'fa-solid fa-hard-hat', img: '/assets/cement.jpeg' },
    { name: 'Stone', count: 'Crushed granite', icon: 'fa-solid fa-cubes', img: '/assets/gitti-stone.jpeg' }
  ];

  whyChooseUs = [
    { title: 'Genuine Products', desc: 'Direct sourcing from top enterprise plants. 100% genuine certifications.', icon: 'fa-solid fa-shield-halved' },
    { title: 'Competitive Prices', desc: 'Best wholesale bulk estimates with transparent billing systems for retail and B2B.', icon: 'fa-solid fa-wallet' },
    { title: 'Fast Delivery', desc: 'Dedicated logistical fleet ensures dispatch straight to your plot within 24-48 hours.', icon: 'fa-solid fa-truck-fast' },
    { title: 'Expert Support', desc: 'Professional engineers available to coordinate structural grades and concrete tests.', icon: 'fa-solid fa-user-tie' }
  ];
}
