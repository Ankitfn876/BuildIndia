import { Component, input, output, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  readonly isOpen = input.required<boolean>();
  readonly close = output<void>();

  onClose() {
    this.close.emit();
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey() {
    if (this.isOpen()) {
      this.onClose();
    }
  }
}
