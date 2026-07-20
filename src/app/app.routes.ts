import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Building India\'s Future | Quality Construction Materials'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Premium Indian Construction Partner'
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent),
    title: 'Our Products | Cement, Steel, Tiles, Paints & Hardware'
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
    title: 'Product Details | Quality Building Materials'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Featured Construction Projects | Building Landmarks across India'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Get in Touch with India\'s Materials Supplier'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
