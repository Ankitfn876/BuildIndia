import { Component } from '@angular/core';
import { Testimonial } from '../../../core/models/testimonial.interface';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'Rohan Deshmukh',
      role: 'Principal Architect',
      company: 'Deshmukh & Associates',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'BuildIndia has revolutionized our material procurement workflow. We received genuine Fe 550D TMT bars and UltraTech OPC 53 cement exactly on time. Their bulk pricing structure is highly transparent, making project calculations straightforward.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't2',
      name: 'Priya Iyer',
      role: 'Homeowner',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      text: 'Building our dream home was a major challenge, but choosing the right materials was easy thanks to BuildIndia. The Kajaria floor tiles and Asian Paints wall texture we bought look absolutely premium. Excellent support throughout!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 't3',
      name: 'Gurmeet Singh',
      role: 'Civil Contractor',
      company: 'G.S. Builders & Infra',
      location: 'Noida, Delhi NCR',
      rating: 4,
      text: 'Procuring heavy plumbing and electrical cables in bulk quantities used to involve constant delays. With BuildIndia, we get genuine Finolex wires and Astral plumbing pipes dispatched within 24 hours. A trustworthy logistics partner.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    }
  ];

  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
