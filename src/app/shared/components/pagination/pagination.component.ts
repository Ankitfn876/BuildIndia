import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  // Signal inputs
  readonly totalItems = input.required<number>();
  readonly pageSize = input.required<number>();
  readonly currentPage = input<number>(1);

  // Outputs
  readonly pageChange = output<number>();

  // Computed page bounds
  readonly totalPages = computed(() => {
    const pages = Math.ceil(this.totalItems() / this.pageSize());
    return pages > 0 ? pages : 1;
  });

  readonly pagesArray = computed(() => {
    const total = this.totalPages();
    return Array.from({ length: total }, (_, i) => i + 1);
  });

  selectPage(page: number) {
    if (page >= 1 && page <= this.totalPages() && page !== this.currentPage()) {
      this.pageChange.emit(page);
    }
  }
}
