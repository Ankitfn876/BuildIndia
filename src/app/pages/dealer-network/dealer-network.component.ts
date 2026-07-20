import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';
import { SeoService } from '../../core/services/seo.service';
import { FormsModule } from '@angular/forms';

interface Dealer {
  id: string;
  name: string;
  state: string;
  city: string;
  address: string;
  phone: string;
  categories: string[];
}

@Component({
  selector: 'app-dealer-network',
  standalone: true,
  imports: [BreadcrumbComponent, FormsModule],
  templateUrl: './dealer-network.component.html',
  styleUrls: ['./dealer-network.component.scss']
})
export class DealerNetworkComponent implements OnInit {
  private seoService = inject(SeoService);

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Authorized Dealer Network' }
  ];

  // Filters State
  readonly selectedState = signal('All');
  readonly searchQuery = signal('');

  states = ['All', 'Maharashtra', 'Delhi NCR', 'Karnataka', 'Tamil Nadu'];

  dealers: Dealer[] = [
    {
      id: 'd1',
      name: 'Maharashtra Structural Materials Corp',
      state: 'Maharashtra',
      city: 'Mumbai',
      address: 'LBS Marg, Kurla West, Near Industrial Estate, Mumbai - 400070',
      phone: '+91 22 2500 4880',
      categories: ['OPC/PPC Cement', 'TMT Steel Rebars']
    },
    {
      id: 'd2',
      name: 'Deccan Steel & Cement Hub',
      state: 'Maharashtra',
      city: 'Pune',
      address: 'Hadapsar Bypass Road, Industrial Zone, Pune - 411028',
      phone: '+91 20 2680 1550',
      categories: ['Tata Steel TMT', 'UltraTech Cement']
    },
    {
      id: 'd3',
      name: 'Southern Tiles, Pipes & Hardware Depot',
      state: 'Tamil Nadu',
      city: 'Chennai',
      address: 'Mount Road, Guindy, Opposite Metro Pillar 12, Chennai - 600032',
      phone: '+91 44 2235 6900',
      categories: ['Kajaria Vitrified Tiles', 'Astral CPVC Pipes']
    },
    {
      id: 'd4',
      name: 'Bangalore Build-Tech Supply Yard',
      state: 'Karnataka',
      city: 'Bengaluru',
      address: 'Whitefield Main Road, Next to Logistics Hub, Bengaluru - 560066',
      phone: '+91 80 2843 3220',
      categories: ['Ambuja Cement', 'Supreme Drainage PVC']
    },
    {
      id: 'd5',
      name: 'Noida Premium Builder Solutions',
      state: 'Delhi NCR',
      city: 'Noida',
      address: 'Sector 63, Block H-12, Electronic City, Noida - 201301',
      phone: '+91 120 4220 900',
      categories: ['ACC Cement', 'Berger Protective Paints']
    }
  ];

  // Computed filter of dealers
  readonly filteredDealers = computed(() => {
    const state = this.selectedState();
    const query = this.searchQuery().toLowerCase().trim();

    let results = this.dealers;

    if (state !== 'All') {
      results = results.filter(d => d.state === state);
    }

    if (query) {
      results = results.filter(d => 
        d.name.toLowerCase().includes(query) ||
        d.city.toLowerCase().includes(query) ||
        d.address.toLowerCase().includes(query)
      );
    }

    return results;
  });

  ngOnInit() {
    this.seoService.setMetaTags(
      'Authorized Dealer Network',
      'Locate authorized building material suppliers and bulk warehouses near you. Select states like Maharashtra, Karnataka, Tamil Nadu, and Delhi NCR.'
    );
  }
}
