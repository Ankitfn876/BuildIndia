import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  newsletterEmail = '';
  subscriptionSuccess = signal(false);
  currentYear = new Date().getFullYear();

  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
      console.log('Newsletter subscription for:', this.newsletterEmail);
      this.subscriptionSuccess.set(true);
      this.newsletterEmail = '';
      setTimeout(() => this.subscriptionSuccess.set(false), 5000);
    }
  }
}
