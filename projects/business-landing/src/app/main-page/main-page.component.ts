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

  // Card-Daten als Objekt (startet mit 3 Cards)
  serviceCards: CardData[] = [
    {
      topContent: 'Webentwicklung',
      midContent: 'Moderne, responsive Websites und Web-Apps mit neuesten Technologien.',
      bottomContent: 'Mehr erfahren',
      variant: 'business'
    },
    {
      topContent: 'E-Commerce',
      midContent: 'Professionelle Online-Shops mit optimierter User Experience.',
      bottomContent: 'Shop-Demo ansehen',
      variant: 'business'
    },
    {
      topContent: 'Beratung',
      midContent: 'Strategische Beratung für Ihre digitale Transformation.',
      bottomContent: 'Termin buchen',
      variant: 'business'
    }
  ];

  // Methode zum Hinzufügen weiterer Cards
  addMoreCards() {
    const newCards: CardData[] = [
      {
        topContent: 'SEO Optimierung',
        midContent: 'Bessere Sichtbarkeit in Suchmaschinen für mehr Traffic.',
        bottomContent: 'SEO-Check',
        variant: 'business'
      },
      {
        topContent: 'Performance',
        midContent: 'Schnelle Ladezeiten und optimierte Benutzererfahrung.',
        bottomContent: 'Speed-Test',
        variant: 'business'
      }
    ];
    this.serviceCards = [...this.serviceCards, ...newCards];
  }
}
