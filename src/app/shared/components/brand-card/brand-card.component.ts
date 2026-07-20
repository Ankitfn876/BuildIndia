import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Brand } from '../../../core/models/brand.interface';

@Component({
  selector: 'app-brand-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent {
  readonly brand = input.required<Brand>();
}
