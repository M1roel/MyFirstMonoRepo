import { Component } from '@angular/core';
import { 
  HeroSectionSplitComponent, 
  HeroHeading, 
  HeroImage,
  PhilosophyImage, 
  PhilosophySectionSplitComponent, 
  AboutSectionSplitComponent, 
  GallerySectionSplitComponent 
} from 'atomic-components';

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
    { src: 'images/01.png', alt: 'Erlesene Kochkunst' },
    { src: 'images/02.png', alt: 'Lumière Restaurant' },
    { src: 'images/03.png', alt: 'Fine Dining Erlebnis' }
  ];

  philosophyImages: PhilosophyImage[] = [
    { src: 'images/chef.png', alt: 'Küchenchef der erlesenen Kochkunst' },
    { src: 'images/04.png', alt: 'Ein wunderschön angerichtetes Gourmet-Gericht, das unsere Philosophie repräsentiert.' }
  ];

  philosophyContent = {
    heading: 'KULINARISCHE PHILOSOPHIE',
    description: 'Meine kulinarische Philosophie vereint die Harmonie von Geschmack und Präsentation.',
    subText: 'Mit über einem Jahrzehnt Erfahrung verbinde ich traditionelle Techniken mit modernen Aromen und schaffe unvergessliche kulinarische Erlebnisse, die die Essenz der gehobenen Küche zelebrieren.'
  };

  aboutContent = {
    backgroundText: 'Hintergrund',
    exhibitionText: 'Ausstellungen',
    backgroundItems: [
      'Bachelor of Culinary Arts von Le Cordon Bleu',
      '5 Jahre Erfahrung in einem Michelin-Stern Restaurant',
      'Fortgeschrittene Ausbildung in französischer und italienischer Küche',
      'Zertifizierter Sommelier mit Expertise in Weinbegleitung',
      'Spezialisiert auf molekulare Gastronomie-Techniken',
      'Gastkoch an renommierten Kochschulen',
      'Gewinner des Young Chef Award 2019'
    ],
    exhibitionItems: [
      'Teilnahme am Kulinarischen Showcase 2023',
      'Präsentation beim Gastronomie-Festival 2024',
      'Kooperationsveranstaltungen mit renommierten lokalen Höfen',
      'Live-Kochvorführung bei der Food & Wine Expo',
      'Veröffentlichung im Chef Spotlight des Gourmet Magazins',
      'Exklusives Degustationsmenü bei einer Wohltätigkeitsgala',
      'Hauptredner beim Internationalen Kulinarischen Gipfel',
      'Handwerker-Dinner-Serie mit lokalen Produzenten'
    ]
  };

  aboutImage = {
    src: 'images/06.png',
    alt: 'Über das Lumière Restaurant'
  };

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
