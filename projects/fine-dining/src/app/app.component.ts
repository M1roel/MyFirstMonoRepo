import { Component } from '@angular/core';
import { HeroSectionSplitComponent, PhilosophyImage, PhilosophySectionSplitComponent } from 'atomic-components';

interface HeroHeading {
  text: string;
  level: number;
}

interface HeroImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroSectionSplitComponent, PhilosophySectionSplitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  headings: HeroHeading[] = [
    { text: 'EXQUISITE CULINARY ART', level: 1 },
    { text: 'LUMIÈRE', level: 2 },
    { text: 'FINE DINING', level: 3 }
  ];

  heroImages: HeroImage[] = [
    { src: 'images/01.png', alt: 'Exquisite Culinary Art' },
    { src: 'images/02.png', alt: 'Lumière Restaurant' },
    { src: 'images/03.png', alt: 'Fine Dining Experience' }
  ];

  philosophyImages: PhilosophyImage[] = [
    { src: 'images/chef5.png', alt: 'Chef of Exquisite Culinary Art' },
    { src: 'images/04.png', alt: 'A beautifully plated gourmet dish representing our philosophy.' }
  ];
}
