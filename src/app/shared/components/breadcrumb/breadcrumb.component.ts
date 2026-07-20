import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbPath {
  label: string;
  url?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  readonly paths = input.required<BreadcrumbPath[]>();
}
