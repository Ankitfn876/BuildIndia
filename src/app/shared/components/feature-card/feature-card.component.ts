import { Component, input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent {
  readonly icon = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
