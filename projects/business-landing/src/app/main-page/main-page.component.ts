import { Component } from '@angular/core';
import { HeroStackedComponent, FlexCardWrappedComponent, CardData, ImageComponent, TextComponent, HeadlineComponent } from 'atomic-components';

@Component({
  selector: 'app-main-page',
  imports: [HeroStackedComponent, FlexCardWrappedComponent, ImageComponent, TextComponent, HeadlineComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  src = 'images/webentwicklung.jpg';
  alt = 'Team working on web development project';
  text = `Sie möchten Ihr Unternehmen digital stärken? Wir bieten Ihnen maßgeschneiderte Komplettlösungen für moderne, responsive Websites und innovative Web-Apps – speziell für kleine und mittelständische Unternehmen (KMU).`;

  vorteile: string[] = [
    'Individuelles, ansprechendes Design',
    'Optimale Darstellung auf Smartphone, Tablet und Desktop',
    'Schnelle Ladezeiten und hohe Benutzerfreundlichkeit',
    'Suchmaschinenoptimierte Inhalte für mehr Sichtbarkeit',
    'Persönliche Beratung und Rundum-Service – von der Idee bis zum fertigen Webauftritt'
  ];

  abschluss = `Profitieren Sie von unserer Erfahrung und unserem Engagement für Ihren digitalen Erfolg. Wir begleiten Sie zuverlässig durch alle Projektphasen.\n\nMachen Sie Ihr Unternehmen fit für die digitale Zukunft – kontaktieren Sie uns jetzt und erfahren Sie mehr!`;

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
      headingText: 'Chat-App für Unternehmen',
      midContent: 'Echtzeit-Kommunikationslösung zur Verbesserung der Teamzusammenarbeit.',
      buttonLabel: 'Projekt ansehen',
          buttonAction: () => window.open('https://dabubble.peterpfautsch.de', '_blank'),
      variant: 'business'
    },
    {
      headingText: 'Aufgabenmanager',
      midContent: 'Jira-ähnliche Web-App zur effizienten Verwaltung von Projekten und Aufgaben.',
      buttonLabel: 'Projekt ansehen',
      buttonAction: () => window.open('https://join.peterpfautsch.de', '_blank'),
      variant: 'business'
    },
    {
      headingText: 'Rechnungs Web-App',
      midContent: 'Tool zur einfachen Erstellung und Verwaltung von Rechnungen online.',
      buttonLabel: 'Projekt ansehen',
      buttonAction: () => window.open('https://peytor.de', '_blank'),
      variant: 'business'
    }
  ];
}
