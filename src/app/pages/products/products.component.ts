import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { SeoService } from '../../core/services/seo.service';
import { Product } from '../../core/models/product.interface';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { ProductFilterComponent } from '../../shared/components/product-filter/product-filter.component';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar.component';
import { LoadingSkeletonComponent } from '../../shared/components/loading-skeleton/loading-skeleton.component';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductCardComponent,
    ProductFilterComponent,
    SearchBarComponent,
    LoadingSkeletonComponent,
    PaginationComponent,
    BreadcrumbComponent
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // Signal States
  readonly searchQuery = signal('');
  readonly selectedCategory = signal('All');
  readonly currentPage = signal(1);
  readonly isLoading = signal(false);

  readonly pageSize = 6;

  // Metadata arrays
  categories = this.productService.getCategories();

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Products' }
  ];

  // Computed signal to reactively compile filtered dataset
  readonly filteredProducts = computed(() => {
    const query = this.searchQuery();
    const cat = this.selectedCategory();
    
    return this.productService.searchProducts(query, cat);
  });

  // Sliced products for page boundaries
  readonly paginatedProducts = computed(() => {
    const products = this.filteredProducts();
    const page = this.currentPage();
    const size = this.pageSize;
    const start = (page - 1) * size;
    
    return products.slice(start, start + size);
  });

  ngOnInit() {
    this.seoService.setMetaTags(
      'Building Materials Catalog',
      'Explore premium cement grades, TMT reinforcement steel, tiles, paints, and sanitary ware.'
    );

    // Subscribe to query parameters to handle navigation link states
    this.route.queryParams.subscribe(params => {
      this.isLoading.set(true);
      
      if (params['category']) {
        this.selectedCategory.set(params['category']);
      } else {
        this.selectedCategory.set('All');
      }
      
      this.currentPage.set(1);
      
      // Simulate quick content fetch transition
      setTimeout(() => this.isLoading.set(false), 500);
    });
  }

  onSearch(query: string) {
    this.isLoading.set(true);
    this.searchQuery.set(query);
    this.currentPage.set(1);
    setTimeout(() => this.isLoading.set(false), 300);
  }

  onCategoryChange(cat: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: cat === 'All' ? null : cat },
      queryParamsHandling: 'merge'
    });
  }

  onClearAll() {
    this.searchQuery.set('');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: null }
    });
  }

  onPageChange(page: number) {
    this.isLoading.set(true);
    this.currentPage.set(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
    setTimeout(() => this.isLoading.set(false), 300);
  }
}
