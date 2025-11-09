import { Component } from '@angular/core';
import { GallerySectionSplitComponent } from 'atomic-components';

@Component({
  selector: 'app-page-gallery',
  imports: [GallerySectionSplitComponent],
  templateUrl: './page-gallery.component.html',
  styleUrl: './page-gallery.component.scss'
})
export class PageGalleryComponent {
  galleryContent = {
    headingText: 'GALERIE',
    items: [
      {
        number: '01',
        src: 'images/07.png',
        alt: 'Gourmet-Gericht 1',
        text: 'Elegantes Speisen',
        subtext: 'Ein raffiniertes Ambiente mit erlesenen Dekorationselementen.'
      },
      {
        number: '02',
        src: 'images/08.png',
        alt: 'Gourmet-Gericht 2',
        text: 'Intime Ecke',
        subtext: 'Ein gemütlicher Ort für private kulinarische Erlebnisse.'
      },
      {
        number: '03',
        src: 'images/09.png',
        alt: 'Gourmet-Gericht 3',
        text: 'Großzügiges Ambiente',
        subtext: 'Offenes Layout mit anspruchsvollen Designelementen.'
      }
    ]
  };
}
