import { Component } from '@angular/core';
import { HeroStackedComponent, FlexCardWrappedComponent, CardData } from 'atomic-components';

@Component({
  selector: 'app-main-page',
  imports: [HeroStackedComponent, FlexCardWrappedComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  heroContent = {
    heading: "Moderne Webseiten, Shops und Web-Apps",
    subheadingText: "Individuelle und performante Weblösungen für Ihr Unternehmen.",
    buttonText: "Kostenloses Erstgespräch vereinbaren"
  };

  serviceCards: CardData[] = [
    {
      headingText: 'Webentwicklung',
      midContent: 'Moderne, responsive Websites und Web-Apps mit neuesten Technologien.',
      buttonLabel: 'Mehr erfahren',
      buttonAction: () => console.log('Webentwicklung clicked'),
      variant: 'business'
    },
    {
      headingText: 'E-Commerce',
      midContent: 'Professionelle Online-Shops mit optimierter User Experience.',
      buttonLabel: 'Shop-Demo ansehen',
      buttonAction: () => console.log('E-Commerce clicked'),
      variant: 'business'
    },
    {
      headingText: 'Beratung',
      midContent: 'Strategische Beratung für Ihre digitale Transformation.',
      buttonLabel: 'Termin buchen',
      buttonAction: () => console.log('Beratung clicked'),
      variant: 'business'
    }
  ];

projectsCards: CardData[] = [
    {
      headingText: 'Kundenprojekt A',
      midContent: 'Beschreibung des Projekts A.',
      buttonLabel: 'Projekt ansehen',
      buttonAction: () => console.log('Kundenprojekt A clicked'),
      variant: 'business'
    },
    {
      headingText: 'Kundenprojekt B',
      midContent: 'Beschreibung des Projekts B.',
      buttonLabel: 'Projekt ansehen',
      buttonAction: () => console.log('Kundenprojekt B clicked'),
      variant: 'business'
    },
    {
      headingText: 'Kundenprojekt C',
      midContent: 'Beschreibung des Projekts C.',
      buttonLabel: 'Projekt ansehen',
      buttonAction: () => console.log('Kundenprojekt C clicked'),
      variant: 'business'
    }
  ];
}
