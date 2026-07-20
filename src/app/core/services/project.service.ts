import { Injectable } from '@angular/core';
import { Project } from '../models/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 'villa-shanti',
      title: 'Villa Shanti - Premium Residential Estate',
      location: 'Alibaug, Maharashtra',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      materialsUsed: ['UltraTech OPC 53', 'Tata Tiscon 550D', 'Kajaria Floor Tiles', 'Asian Paints Apex Ultima'],
      client: 'Narayana Reddy Enterprises',
      completionYear: 2025
    },
    {
      id: 'apex-tower',
      title: 'Apex Heights - IT Corporate Park',
      location: 'Noida Sector 62, Uttar Pradesh',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      materialsUsed: ['JK Cement OPC 53', 'JSW Neosteel rebars', 'Supreme Drainage Systems'],
      client: 'Apex Infrastructure Group',
      completionYear: 2024
    },
    {
      id: 'maharashtra-highway-flyover',
      title: 'National Highway-48 Express Flyover',
      location: 'Pune Bypass, Maharashtra',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80',
      materialsUsed: ['UltraTech OPC 53', 'Tata Steel 550D Rebars', 'Supreme PVC conduits'],
      client: 'National Highways Authority of India (NHAI)',
      completionYear: 2025
    },
    {
      id: 'tata-logistics-hub',
      title: 'Tata Logistics & Distribution Complex',
      location: 'Nelamangala, Bengaluru, Karnataka',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
      materialsUsed: ['Ambuja Cement', 'Tata Structural Steel Sheets', 'JSW Colouron Roofing'],
      client: 'Tata Logistics Corp',
      completionYear: 2023
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
