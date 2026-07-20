import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { BrandService } from '../../core/services/brand.service';
import { SeoService } from '../../core/services/seo.service';
import { Brand } from '../../core/models/brand.interface';
import { BrandCardComponent } from '../../shared/components/brand-card/brand-card.component';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [BrandCardComponent, BreadcrumbComponent],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  private brandService = inject(BrandService);
  private seoService = inject(SeoService);

  // Filter Signal
  readonly selectedCategory = signal<string>('All');

  categories = ['All', 'Cement', 'TMT Steel', 'Tiles & Sanitary', 'Paints', 'Plumbing'];

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Partner Brands' }
  ];

  // Expose all brands dataset
  allBrands = this.brandService.getBrands();

  // Computed brand list based on filter
  readonly filteredBrands = computed(() => {
    const filter = this.selectedCategory();
    if (filter === 'All') return this.allBrands;
    return this.brandService.getBrandsByCategory(filter);
  });

  ngOnInit() {
    this.seoService.setMetaTags(
      'Our Partner Brands',
      'Discover top tier construction brands like UltraTech, Tata Steel, Kajaria, and Asian Paints. Direct wholesale sourcing.'
    );
  }

  setFilter(cat: string) {
    this.selectedCategory.set(cat);
  }
}
