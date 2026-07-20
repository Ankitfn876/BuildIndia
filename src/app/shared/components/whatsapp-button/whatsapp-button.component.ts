import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent {
  whatsappUrl = 'https://wa.me/919876543210?text=Hi%21%20I%20am%20interested%20in%20building%20materials.%20Please%20assist%20me%20with%20pricing.';
}
