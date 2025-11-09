import { Component } from '@angular/core';
import { AboutSectionSplitComponent } from 'atomic-components';

@Component({
  selector: 'app-page-about',
  imports: [AboutSectionSplitComponent],
  templateUrl: './page-about.component.html',
  styleUrl: './page-about.component.scss'
})
export class PageAboutComponent {
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
}
