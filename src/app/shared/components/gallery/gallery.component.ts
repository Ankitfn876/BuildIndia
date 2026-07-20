import { Component, signal, computed } from '@angular/core';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  // Reactive Signals for filtering and lightbox
  readonly activeCategory = signal<string>('All');
  readonly lightboxImage = signal<string | null>(null);
  readonly lightboxTitle = signal<string>('');

  categories = ['All', 'Cement', 'TMT Steel', 'Bricks & Blocks', 'Tiles', 'Paints'];

  galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Structural Slab Casting',
      category: 'Cement',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      description: 'OPC 53 concrete foundation slab curing at a residential site in Mumbai.'
    },
    {
      id: 'g2',
      title: 'TMT Rebar Framework',
      category: 'TMT Steel',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
      description: 'Fe 550D columns framework setup for high-rise commercial structures.'
    },
    {
      id: 'g3',
      title: 'Double Charged Vitrified Installation',
      category: 'Tiles',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
      description: 'Premium floor tiles installation at an upscale apartment lobby in Bengaluru.'
    },
    {
      id: 'g4',
      title: 'Apex Exterior Texture Application',
      category: 'Paints',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
      description: 'Weatherproofing coating and silicon-shield emulsion application on high rise.'
    },
    {
      id: 'g5',
      title: 'Red Clay Brick Masonry',
      category: 'Bricks & Blocks',
      answer: 'High durability structural walls layout using Kiln-Baked bricks.',
      image: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80',
      description: 'First class kiln-burnt red clay brick wall binding at residential plot.'
    } as any,
    {
      id: 'g6',
      title: 'Flyover Support Pillars',
      category: 'Cement',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      description: 'Reinforced concrete columns and deck installation for NH-48 Express highway.'
    }
  ];

  // Computed signal to filter items
  readonly filteredItems = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'All') return this.galleryItems;
    return this.galleryItems.filter(item => item.category === cat);
  });

  setCategory(category: string) {
    this.activeCategory.set(category);
  }

  openLightbox(item: GalleryItem) {
    this.lightboxImage.set(item.image);
    this.lightboxTitle.set(item.title);
  }

  closeLightbox() {
    this.lightboxImage.set(null);
    this.lightboxTitle.set('');
  }
}
