import { Component } from '@angular/core';
import { HeroSectionSplitComponent, HeroHeading, HeroImage } from 'atomic-components';

@Component({
  selector: 'app-page-hero',
  imports: [HeroSectionSplitComponent],
  templateUrl: './page-hero.component.html',
  styleUrl: './page-hero.component.scss'
})
export class PageHeroComponent {
  headings: HeroHeading[] = [
    { text: 'EXQUISITE CULINARY ART', level: 1 },
    { text: 'LUMIÈRE', level: 2 },
    { text: 'FINE DINING', level: 3 }
  ];

  heroImages: HeroImage[] = [
    { src: 'images/01.png', alt: 'Erlesene Kochkunst' },
    { src: 'images/02.png', alt: 'Lumière Restaurant' },
    { src: 'images/03.png', alt: 'Fine Dining Erlebnis' }
  ];
}
