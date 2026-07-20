import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';
import { QuoteFormComponent } from '../../shared/components/quote-form/quote-form.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-request-quote-page',
  standalone: true,
  imports: [BreadcrumbComponent, QuoteFormComponent],
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.scss']
})
export class RequestQuoteComponent implements OnInit {
  private seoService = inject(SeoService);

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Request Free Quote' }
  ];

  ngOnInit() {
    this.seoService.setMetaTags(
      'Request Free Quote',
      'Select bulk construction materials and calculate your custom freight prices directly from our estimators.'
    );
  }
}
