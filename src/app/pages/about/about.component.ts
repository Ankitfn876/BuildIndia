import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'About Us' }
  ];

  timelineEvents = [
    { year: '2006', title: 'Company Inception', desc: 'Started as a regional material supplier in Mumbai with a small fleet of 5 trucks.' },
    { year: '2012', title: 'Sourcing Tie-Ups', desc: 'Partnered with UltraTech and Tata Steel to offer certified, direct-to-site structural materials.' },
    { year: '2018', title: 'Digital Fleet Launch', desc: 'Introduced transparent real-time quote calculators and expanded logistics across Maharashtra.' },
    { year: '2026', title: '50+ Cities Served', desc: 'Now India\'s premier procurement partner, serving residential, commercial, and infra landmarks.' }
  ];

  coreValues = [
    { title: 'Absolute Integrity', desc: 'We deliver exactly what was ordered. Weight audits, brand stamps, and test reports are provided with every dispatch.', icon: 'fa-solid fa-scale-balanced' },
    { title: 'Direct Sourcing', desc: 'Eliminating intermediaries allows us to offer transparent wholesale rates directly from manufacturer yards.', icon: 'fa-solid fa-handshake-simple' },
    { title: 'Logistical Precision', desc: 'With GPS-enabled trucks, we maintain a 98.4% on-time dispatch rate even under heavy structural timelines.', icon: 'fa-solid fa-truck-ramp-box' }
  ];

  ngOnInit() {
    this.seoService.setMetaTags(
      'About Us',
      'Learn about India\'s premier building materials supplier. Direct sourcing, certified products, and custom bulk logistic operations.'
    );
  }
}
