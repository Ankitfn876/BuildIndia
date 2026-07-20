import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  // Reactive Signal for active accordion tab
  readonly activeIndex = signal<number | null>(0);

  faqs: FaqItem[] = [
    {
      question: 'How do I choose between OPC 43, OPC 53, and PPC cement grades?',
      answer: 'OPC 53 is ideal for structural components like columns, slabs, and foundations requiring high early strength. OPC 43 is standard for general plastering and brick masonry. PPC (Portland Pozzolana Cement) is highly recommended for residential brickwork, plastering, and marine environments due to its high resistance to chemical attacks, lower heat of hydration, and superior long-term strength.'
    },
    {
      question: 'What is the significance of the "Fe 550D" grade in TMT steel rebars?',
      answer: 'In Fe 550D, "Fe" stands for iron, "550" indicates the minimum yield strength of 550 MPa, and "D" stands for Ductility. Fe 550D bars are engineered specifically for high-stress zones and earthquake-prone areas (seismic zones III, IV, and V in India), as they offer the ideal blend of high load-carrying capacity and high percentage elongation (ductility).'
    },
    {
      question: 'Do you offer direct site delivery across different states in India?',
      answer: 'Yes, we serve over 50+ major cities across India. We have a robust logistic network of trucks and bulk carriers supplying materials directly from plant warehouses to your construction site. Delivery coordinates can be set during the quote request process.'
    },
    {
      question: 'Can I add multiple brands and categories into a single quote request?',
      answer: 'Absolutely. Using our Signal-driven quote registry, you can browse various categories (Cement, TMT Steel, Tiles, Paints) and brands (UltraTech, Kajaria, Tata Steel) and add them to a single centralized quote cart. You can review all items together before submitting.'
    },
    {
      question: 'Are the prices listed on the catalog inclusive of transport and local GST?',
      answer: 'The prices shown in the catalog represent baseline market estimate ranges in Indian Rupees. Exact shipping rates, octroi charges, and GST (18% for steel, 28% for cement) are dynamically computed by our estimation desk depending on site location and bulk volumes, which are sent via email/WhatsApp within 2 hours of submitting a quote request.'
    }
  ];

  toggleFaq(index: number) {
    this.activeIndex.update(curr => curr === index ? null : index);
  }
}
