import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../core/services/seo.service';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  private seoService = inject(SeoService);

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Knowledge Blog' }
  ];

  posts: BlogPost[] = [
    {
      id: 'post-concrete-coastal',
      title: 'Choosing Concrete Grades for Coastal Foundations',
      excerpt: 'Foundations near coastal lines like Mumbai or Chennai are highly vulnerable to sulphate and chloride attacks. Learn why PPC cement and Fe 550D structural rebars are critical for soil compliance.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      category: 'Cement & Concrete',
      date: 'July 14, 2026',
      author: 'Ar. Manish Joshi',
      readTime: '6 min read'
    },
    {
      id: 'post-tmt-ductility',
      title: 'Ductility vs Tensile Strength in TMT Steel Rebars',
      excerpt: 'Structural safety during seismic activities relies heavily on rebar ductility. We explain the core engineering differences between Fe 500, Fe 550, and Fe 550D specifications.',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
      category: 'TMT Steel',
      date: 'July 09, 2026',
      author: 'Er. Rakesh Nair',
      readTime: '8 min read'
    },
    {
      id: 'post-wall-waterproofing',
      title: 'Silicone Additives in Exterior Paints: A Waterproofing Guide',
      excerpt: 'Heavy monsoon phases in India can lead to damp walls and efflorescence. Discover how silicon shield emulsions bridge minor plaster cracks and block damp ingress.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
      category: 'Paints & Finishing',
      date: 'June 28, 2026',
      author: 'Sanjay Verma',
      readTime: '5 min read'
    }
  ];

  ngOnInit() {
    this.seoService.setMetaTags(
      'Construction & Building Blog',
      'Read expert construction tips, grade choices, slab curing periods, and wall waterproofing guides written by senior builders and architects.'
    );
  }
}
