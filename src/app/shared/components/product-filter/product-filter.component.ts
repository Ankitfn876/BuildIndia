import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  // Signal inputs from parent catalog page
  readonly categories = input.required<string[]>();
  readonly selectedCategory = input<string>('All');

  // Outputs
  readonly categoryChange = output<string>();
  readonly clearFilters = output<void>();

  onSelectCategory(cat: string) {
    this.categoryChange.emit(cat);
  }

  onClear() {
    this.clearFilters.emit();
  }
}
