import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  setMetaTags(title: string, description: string, image = 'assets/images/og-image.jpg') {
    const formattedTitle = `${title} | BuildIndia Premium Materials`;
    this.titleService.setTitle(formattedTitle);
    
    this.metaService.updateTag({ name: 'description', content: description });
    
    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: formattedTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:image', content: image });
    
    // Twitter Card
    this.metaService.updateTag({ property: 'twitter:title', content: formattedTitle });
    this.metaService.updateTag({ property: 'twitter:description', content: description });
    this.metaService.updateTag({ property: 'twitter:image', content: image });
  }
}
