import { Component, input, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product.interface';
import { QuoteService } from '../../../core/services/quote.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  private quoteService = inject(QuoteService);

  // Angular Signal input
  readonly product = input.required<Product>();

  // Feedback UI signal
  added = signal(false);

  addToQuote(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    
    // Add to quote (default amount is 50 for bags, etc.)
    this.quoteService.addToQuote(this.product());
    
    // Trigger quick button feedback
    this.added.set(true);
    setTimeout(() => this.added.set(false), 2000);
  }
}
