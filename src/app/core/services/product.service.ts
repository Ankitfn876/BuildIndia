import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 'sariya-tmt',
      name: 'Premium TMT Sariya',
      category: 'Sariya',
      brand: 'TMT Steel',
      priceRange: '₹62,000 - ₹66,500 / Ton',
      rating: 4.9,
      ratingCount: 950,
      image: '/assets/Sariya-tmt.jpeg',
      description: 'Premium high-strength ribbed TMT reinforcement bar designed to resist earthquakes. Manufactured through advanced thermo-mechanical treatment.',
      specs: {
        'Fe Grade': 'Fe 550D',
        'Diameter Available': '8mm, 10mm, 12mm, 16mm, 20mm, 25mm',
        'Standard': 'IS 1786:2008',
        'Ductility': 'Super High Ductility',
        'Weldability': 'Excellent'
      },
      features: [
        'Superior bond strength with concrete',
        'Excellent earthquake and seismic resistance',
        'High corrosion and rust resistance',
        'Perfect combination of strength and ductility'
      ],
      bestSeller: true
    },
    {
      id: 'sand-balu',
      name: 'Premium Sand (Balu)',
      category: 'Sand',
      brand: 'River Sand',
      priceRange: '₹3,200 - ₹3,800 / Brass',
      rating: 4.7,
      ratingCount: 380,
      image: '/assets/Sand-Balu.jpeg',
      description: 'Double-washed, coarse river sand graded for brickwork, plastering, and concrete mix preparation. Free of excessive silt and organic debris.',
      specs: {
        'Type': 'River Sand / M-Sand',
        'Grain Size': 'Fine to Medium',
        'Silt Content': '< 3%',
        'Color': 'Natural Brownish / Grey',
        'Recommended For': 'Plastering, Brickwork, Concrete Mixing'
      },
      features: [
        'Sieved and washed multiple times to reduce silt',
        'Excellent cohesiveness and bonding in mortar',
        'Free from clay, loam, and organic matter',
        'Perfect aggregate compatibility for high-strength concrete'
      ],
      bestSeller: true
    },
    {
      id: 'cement-premium',
      name: 'Premium Cement OPC 53 Grade',
      category: 'Cement',
      brand: 'OPC Cement',
      priceRange: '₹410 - ₹445 / Bag',
      rating: 4.8,
      ratingCount: 1420,
      image: '/assets/cement.jpeg',
      description: 'High-strength Portland cement ideal for structural applications, high-rise buildings, concrete foundations, and bridge structures.',
      specs: {
        'Grade': 'OPC 53',
        'Packaging Type': 'PP Bag',
        'Weight': '50 kg',
        'Standard': 'IS 269:2015',
        'Recommended For': 'RCC Slabs, Columns, Foundations'
      },
      features: [
        'Super high early strength development',
        'Optimal setting and curing times',
        'Superior resistance to corrosion and scaling',
        'Consistently high performance standard'
      ],
      bestSeller: true
    },
    {
      id: 'stone-gitti',
      name: 'Premium Stone (Gitti)',
      category: 'Stone',
      brand: 'Aggregate Stone',
      priceRange: '₹2,800 - ₹3,400 / Brass',
      rating: 4.6,
      ratingCount: 420,
      image: '/assets/gitti-stone.jpeg',
      description: 'Premium crushed blue metal angular granite aggregate. Carefully graded to ensure the highest compressive strength in structural concrete.',
      specs: {
        'Size': '10mm - 20mm',
        'Type': 'Crushed Granite blue metal',
        'Shape': 'Angular / Flakiness < 15%',
        'Crushing Value': '< 20%',
        'Recommended For': 'RCC Slabs, Road Construction, Column casting'
      },
      features: [
        'Excellent angular interlocking shapes for concrete',
        'High compressive and crush resistance',
        'Cleaned, dust-free aggregate',
        'Ideal for grade mixes from M20 to M40'
      ],
      bestSeller: true
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  getFeaturedProducts(): Product[] {
    return this.products.filter(p => p.bestSeller);
  }

  searchProducts(query: string, category?: string): Product[] {
    let results = this.products;

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    if (category && category !== 'All') {
      results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    return results;
  }

  getCategories(): string[] {
    return Array.from(new Set(this.products.map(p => p.category)));
  }

  getBrands(): string[] {
    return [];
  }
}
