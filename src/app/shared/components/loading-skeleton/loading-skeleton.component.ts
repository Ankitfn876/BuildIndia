import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-loading-skeleton',
  standalone: true,
  templateUrl: './loading-skeleton.component.html',
  styleUrls: ['./loading-skeleton.component.scss']
})
export class LoadingSkeletonComponent {
  readonly count = input<number>(3);

  // Compute a layout iteration array reactively when input changes
  readonly skeletonItems = computed(() => Array(this.count()).fill(0));
}
