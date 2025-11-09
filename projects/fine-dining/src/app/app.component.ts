import { Component } from '@angular/core';
import { HeroSectionSplitComponent, PhilosophyImage, PhilosophySectionSplitComponent, AboutSectionSplitComponent, GallerySectionSplitComponent } from 'atomic-components';

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
  imports: [HeroSectionSplitComponent, PhilosophySectionSplitComponent, AboutSectionSplitComponent, GallerySectionSplitComponent],
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
      'Advanced training in French and Italian cuisine',
      'Certified Sommelier with expertise in wine pairing',
      'Specialized in molecular gastronomy techniques',
      'Guest chef at prestigious culinary institutes',
      'Winner of the Young Chef Award 2019'
    ],
    exhibitionItems: [
      'Participated in Culinary Showcase 2023',
      'Featured in the Gastronomy Festival 2024',
      'Collaborative events with renowned local farms',
      'Live cooking demonstration at Food & Wine Expo',
      'Published in Gourmet Magazine\'s Chef Spotlight',
      'Hosted exclusive tasting menu at charity gala',
      'Featured speaker at International Culinary Summit',
      'Artisan dinner series with local producers'
    ]
  };

  aboutImage = {
    src: 'images/06.png',
    alt: 'About Lumière Restaurant'
  };

  galleryContent = {
    headingText: 'GALLERY DISPLAY',
    items: [
      {
        number: '01',
        src: 'images/07.png',
        alt: 'Gourmet Dish 1',
        text: 'Elegant Dining',
        subtext: 'A refined setting with exquisite decor elements.'
      },
      {
        number: '02',
        src: 'images/08.png',
        alt: 'Gourmet Dish 2',
        text: 'Intimate Corner',
        subtext: 'A cozy spot for private dining experiences.'
      },
      {
        number: '03',
        src: 'images/09.png',
        alt: 'Gourmet Dish 3',
        text: 'Spacious Ambience',
        subtext: 'Open layout with sophisticated design elements.'
      }
    ]
  };
}
