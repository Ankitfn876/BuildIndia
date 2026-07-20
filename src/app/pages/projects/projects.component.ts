import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ProjectService } from '../../core/services/project.service';
import { SeoService } from '../../core/services/seo.service';
import { Project } from '../../core/models/project.interface';
import { BreadcrumbComponent, BreadcrumbPath } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);
  private seoService = inject(SeoService);

  // Filters State
  readonly selectedCategory = signal<string>('All');

  categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Industrial'];

  breadcrumbPaths: BreadcrumbPath[] = [
    { label: 'Featured Projects' }
  ];

  // Expose dataset
  allProjects = this.projectService.getProjects();

  // Computed filter
  readonly filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') return this.allProjects;
    return this.projectService.getProjectsByCategory(cat);
  });

  ngOnInit() {
    this.seoService.setMetaTags(
      'Our Featured Projects',
      'Discover high-performance construction landmarks across India built with our materials, featuring residential estates, commercial towers, and highways.'
    );
  }

  setFilter(category: string) {
    this.selectedCategory.set(category);
  }
}
