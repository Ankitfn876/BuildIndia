import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  stats = [
    { value: '20+', label: 'Years Experience', icon: 'fa-solid fa-business-time' },
    { value: '5000+', label: 'Customers Served', icon: 'fa-solid fa-users-line' },
    { value: '100%', label: 'Quality Assured', icon: 'fa-solid fa-circle-check' },
    { value: '50+', label: 'Cities Across India', icon: 'fa-solid fa-map-location-dot' }
  ];
}
