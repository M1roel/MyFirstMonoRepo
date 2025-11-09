import { Component } from '@angular/core';
import { PhilosophySectionSplitComponent, PhilosophyImage } from 'atomic-components';

@Component({
  selector: 'app-page-philosophy',
  imports: [PhilosophySectionSplitComponent],
  templateUrl: './page-philosophy.component.html',
  styleUrl: './page-philosophy.component.scss'
})
export class PagePhilosophyComponent {
  philosophyImages: PhilosophyImage[] = [
    { src: 'images/chef.png', alt: 'Küchenchef der erlesenen Kochkunst' },
    { src: 'images/04.png', alt: 'Ein wunderschön angerichtetes Gourmet-Gericht, das unsere Philosophie repräsentiert.' }
  ];

  philosophyContent = {
    heading: 'KULINARISCHE PHILOSOPHIE',
    description: 'Meine kulinarische Philosophie vereint die Harmonie von Geschmack und Präsentation.',
    subText: 'Mit über einem Jahrzehnt Erfahrung verbinde ich traditionelle Techniken mit modernen Aromen und schaffe unvergessliche kulinarische Erlebnisse, die die Essenz der gehobenen Küche zelebrieren.'
  };
}
