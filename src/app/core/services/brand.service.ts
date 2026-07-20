import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.interface';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private brands: Brand[] = [
    {
      id: 'ultratech',
      name: 'UltraTech Cement',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%23FFC107" opacity="0.15"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="16" fill="%23333333" text-anchor="middle">UltraTech</text><text x="100" y="48" font-family="Outfit, sans-serif" font-weight="700" font-size="8" fill="%23FF6B00" text-anchor="middle" letter-spacing="2">CEMENT</text></svg>',
      category: 'Cement',
      description: 'India\'s No. 1 Cement, offering high-performance building solutions.'
    },
    {
      id: 'acc',
      name: 'ACC Cement',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%23DC2626" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="20" fill="%23DC2626" text-anchor="middle">ACC</text><text x="100" y="48" font-family="Outfit, sans-serif" font-weight="700" font-size="8" fill="%23333333" text-anchor="middle" letter-spacing="2">CEMENT</text></svg>',
      category: 'Cement',
      description: 'Pioneers in cement manufacture with a historic trust in Indian constructions.'
    },
    {
      id: 'ambuja',
      name: 'Ambuja Cement',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%230B3C6F" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%230B3C6F" text-anchor="middle">Ambuja</text><text x="100" y="48" font-family="Outfit, sans-serif" font-weight="700" font-size="8" fill="%23FF6B00" text-anchor="middle" letter-spacing="2">CEMENT</text></svg>',
      category: 'Cement',
      description: 'Known for Giant Strength and eco-friendly sustainable concrete solutions.'
    },
    {
      id: 'jkcement',
      name: 'JK Cement',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%230B3C6F" opacity="0.15"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%230B3C6F" text-anchor="middle">JK Cement</text></svg>',
      category: 'Cement',
      description: 'Renowned for high-strength grey cement and premium white cement.'
    },
    {
      id: 'tatasteel',
      name: 'Tata Steel',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%230B3C6F" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%230B3C6F" text-anchor="middle">TATA STEEL</text></svg>',
      category: 'TMT Steel',
      description: 'Premium structural steel and TMT rebar (Tata Tiscon) for absolute strength.'
    },
    {
      id: 'jsw',
      name: 'JSW Neosteel',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%230B3C6F" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%230B3C6F" text-anchor="middle">JSW NEOSTEEL</text></svg>',
      category: 'TMT Steel',
      description: 'High-strength steel rebars built to resist seismological forces.'
    },
    {
      id: 'kajaria',
      name: 'Kajaria Tiles',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%23DC2626" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%23DC2626" text-anchor="middle">Kajaria</text><text x="100" y="48" font-family="Outfit, sans-serif" font-weight="700" font-size="8" fill="%23333333" text-anchor="middle" letter-spacing="2">TILES</text></svg>',
      category: 'Tiles & Sanitary',
      description: 'India\'s largest manufacturer of ceramic and vitrified tiles.'
    },
    {
      id: 'asianpaints',
      name: 'Asian Paints',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%23FF6B00" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%23FF6B00" text-anchor="middle">asian paints</text></svg>',
      category: 'Paints',
      description: 'Stunning premium wall textures, external finishes, and waterproofing systems.'
    },
    {
      id: 'berger',
      name: 'Berger Paints',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%23059669" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%23059669" text-anchor="middle">BERGER</text></svg>',
      category: 'Paints',
      description: 'Expert decorative wall coatings and protective paints.'
    },
    {
      id: 'astral',
      name: 'Astral Pipes',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%230B3C6F" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%230B3C6F" text-anchor="middle">ASTRAL</text><text x="100" y="48" font-family="Outfit, sans-serif" font-weight="700" font-size="8" fill="%23333333" text-anchor="middle" letter-spacing="2">PIPES</text></svg>',
      category: 'Plumbing',
      description: 'Leading producer of high-grade CPVC, PVC, and agricultural drainage pipes.'
    },
    {
      id: 'supreme',
      name: 'Supreme Pipes',
      logo: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><rect width="200" height="60" rx="8" fill="%23FF6B00" opacity="0.1"/><text x="100" y="32" font-family="Outfit, sans-serif" font-weight="800" font-size="18" fill="%23FF6B00" text-anchor="middle">Supreme</text></svg>',
      category: 'Plumbing',
      description: 'Innovators in high-pressure plastic plumbing systems.'
    }
  ];

  getBrands(): Brand[] {
    return this.brands;
  }

  getBrandsByCategory(category: string): Brand[] {
    return this.brands.filter(b => b.category.toLowerCase() === category.toLowerCase());
  }

  getBrandById(id: string): Brand | undefined {
    return this.brands.find(b => b.id === id);
  }
}
