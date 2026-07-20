import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BreadcrumbComponent, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private seoService = inject(SeoService);

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Contact Us' }
  ];

  ngOnInit() {
    this.seoService.setMetaTags(
      'Contact Us',
      'Inquire about wholesale pricing or scheduled site deliveries. Connect via phone, WhatsApp, email, or visit our BKC office in Mumbai.'
    );
  }
}
