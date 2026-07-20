import { Component, inject, input, computed, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { SeoService } from '../../core/services/seo.service';
import { Product } from '../../core/models/product.interface';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  private productService = inject(ProductService);
  private seoService = inject(SeoService);
  private router = inject(Router);

  // Input Signal from route binding parameter (:id)
  readonly id = input.required<string>();

  // Computed signal to resolve active product
  readonly product = computed<Product | undefined>(() => 
    this.productService.getProductById(this.id())
  );

  // Computed specs keys
  readonly specsKeys = computed<string[]>(() => {
    const p = this.product();
    return p ? Object.keys(p.specs) : [];
  });

  // Computed breadcrumbs
  readonly breadcrumbPaths = computed<BreadcrumbPath[]>(() => {
    const p = this.product();
    return [
      { label: 'Products', url: '/products' },
      { label: p ? p.name : 'Detail' }
    ];
  });

  ngOnInit() {
    const p = this.product();
    if (!p) {
      // Redirect back to catalog if invalid ID
      this.router.navigate(['/products']);
      return;
    }

    this.seoService.setMetaTags(
      p.name,
      p.description,
      p.image
    );
  }
}
