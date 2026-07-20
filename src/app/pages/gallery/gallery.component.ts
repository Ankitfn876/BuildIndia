import { Component, inject, OnInit } from '@angular/core';
import { GalleryComponent as SharedGalleryComponent } from '../../shared/components/gallery/gallery.component';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [SharedGalleryComponent, BreadcrumbComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private seoService = inject(SeoService);

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Construction Gallery' }
  ];

  ngOnInit() {
    this.seoService.setMetaTags(
      'Construction & Material Gallery',
      'Browse high-quality photography of slab castings, steel frameworks, vitrified tiling installations, and infrastructure projects across India.'
    );
  }
}
