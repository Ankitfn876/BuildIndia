import { Injectable, signal, computed } from '@angular/core';
import { QuoteItem, QuoteRequest } from '../models/quote.interface';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  // Signals State
  private quoteItemsSignal = signal<QuoteItem[]>([]);

  // Computed Selectors
  readonly quoteItems = this.quoteItemsSignal.asReadonly();
  
  readonly totalItemsCount = computed(() => 
    this.quoteItemsSignal().length
  );

  readonly hasItems = computed(() => 
    this.quoteItemsSignal().length > 0
  );

  addToQuote(product: Product, quantity = 50, unit?: string) {
    const defaultUnit = this.getDefaultUnitForCategory(product.category);
    const selectedUnit = unit || defaultUnit;

    this.quoteItemsSignal.update(items => {
      const existingItem = items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        return items.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newItem: QuoteItem = {
        product: {
          id: product.id,
          name: product.name,
          category: product.category,
          brand: product.brand,
          image: product.image
        },
        quantity,
        unit: selectedUnit,
        notes: ''
      };
      
      return [...items, newItem];
    });
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeFromQuote(productId);
      return;
    }

    this.quoteItemsSignal.update(items => 
      items.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }

  updateNotes(productId: string, notes: string) {
    this.quoteItemsSignal.update(items => 
      items.map(item => 
        item.product.id === productId ? { ...item, notes } : item
      )
    );
  }

  removeFromQuote(productId: string) {
    this.quoteItemsSignal.update(items => 
      items.filter(item => item.product.id !== productId)
    );
  }

  clearQuote() {
    this.quoteItemsSignal.set([]);
  }

  submitQuote(customerDetails: {
    fullName: string;
    phone: string;
    email: string;
    state: string;
    city: string;
    deliveryAddress: string;
    projectType: string;
    comments?: string;
  }): Promise<boolean> {
    return new Promise((resolve) => {
      // Create request payload
      const requestPayload: QuoteRequest = {
        ...customerDetails,
        items: this.quoteItemsSignal()
      };

      console.log('Submitting Quote Request to Backend:', requestPayload);
      
      // Simulate API call
      setTimeout(() => {
        this.clearQuote();
        resolve(true);
      }, 1500);
    });
  }

  private getDefaultUnitForCategory(category: string): string {
    switch (category.toLowerCase()) {
      case 'cement':
        return 'Bags';
      case 'tmt steel':
        return 'Tons';
      case 'bricks & blocks':
        return 'Pieces';
      case 'tiles':
        return 'Boxes';
      case 'paints':
        return 'Liters';
      case 'plumbing':
      case 'electrical':
        return 'Meters';
      case 'hardware':
      case 'sanitary ware':
        return 'Pieces';
      case 'roofing':
        return 'Sq. Mtrs';
      default:
        return 'Units';
    }
  }
}
