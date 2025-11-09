import { Component } from '@angular/core';
import { HeroSectionSplitComponent, PhilosophyImage, PhilosophySectionSplitComponent, AboutSectionSplitComponent } from 'atomic-components';

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
  imports: [HeroSectionSplitComponent, PhilosophySectionSplitComponent, AboutSectionSplitComponent],
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
    { src: 'images/chef.png', alt: 'Chef of Exquisite Culinary Art' },
    { src: 'images/04.png', alt: 'A beautifully plated gourmet dish representing our philosophy.' }
  ];

  philosophyContent = {
    heading: 'CULINARY PHILOSOPHY',
    description: 'My culinary philosophy embraces the harmony of flavors and presentation.',
    subText: 'With over a decade of experience, I blend traditional techniques with modern flavors, creating memorable dining experiences that celebrate the essence of fine cuisine.'
  };

  aboutContent = {
    backgroundText: 'Background',
    exhibitionText: 'Exhibition',
    backgroundItems: [
      'Bachelor of Culinary Arts from Le Cordon Bleu',
      '5 years of experience at a Michelin-starred restaurant',
    ],
    exhibitionItems: [
      'Participated in Culinary Showcase 2023',
      'Featured in the Gastronomy Festival 2024',
      'Collaborative events with renowned local farms'
    ]
  };

  aboutImage = {
    src: 'images/06.png',
    alt: 'About Lumière Restaurant'
  };
}
