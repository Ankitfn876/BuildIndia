import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../core/services/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  private seoService = inject(SeoService);

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Our Services' }
  ];

  services = [
    {
      title: 'Bill of Materials (BOM) Estimation',
      desc: 'Submit your architectural blueprints. Our estimation engineers will calculate exact material quantities for cement bags, steel rebar tonnage, plumbing pipes, and tiles, saving up to 15% wastage.',
      icon: 'fa-solid fa-calculator',
      features: ['24-hour turnaround', 'Grade-specific segregation', 'Format ready for billing desks']
    },
    {
      title: 'Concrete Cube & Material Testing',
      desc: 'Ensure quality safety. We arrange professional laboratory audits including concrete cube compression tests, steel rebar elongation, and brick absorption tests, complete with NABL-compliant reports.',
      icon: 'fa-solid fa-vial-virus',
      features: ['On-site sampling coordinators', 'NABL certified labs', 'Digital certificate repository']
    },
    {
      title: 'Scheduled Logistical Dispatches',
      desc: 'Coordinate material releases depending on building steps. Avoid storage hazards on site by setting up weekly releases of cement, bricks, and steel rebars aligned to slab casting schedules.',
      icon: 'fa-solid fa-route',
      features: ['Real-time GPS tracking', 'Staggered release cycles', 'Flat transit rates']
    },
    {
      title: 'Grade Selection Consultations',
      desc: 'Connect with senior structural consultants regarding matching cement/steel properties for coastal foundations, heavy-traffic commercial floors, or seismic active zone columns.',
      icon: 'fa-solid fa-user-doctor',
      features: ['Soil audit evaluations', 'Seismic design compliance checks', 'Optimal OPC/PPC ratios']
    }
  ];

  ngOnInit() {
    this.seoService.setMetaTags(
      'Our Value-Added Services',
      'Optimize construction cycles with our estimation desks, NABL concrete testing labs, scheduled logistics, and structural consultations.'
    );
  }
}
