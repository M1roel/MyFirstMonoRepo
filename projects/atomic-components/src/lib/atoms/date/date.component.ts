import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'atomic-date',
  imports: [NgClass],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {
  @Input() format: 'full' | 'short' | 'medium' | 'weekday-only' = 'full';
  @Input() locale: string = 'de-DE';
  @Input() customDate?: Date;
  @Input() className: string = '';

  get currentDate(): Date {
    return this.customDate || new Date();
  }

  get formattedDate(): string {
    const date = this.currentDate;
    
    const weekdays = {
      'de-DE': ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
      'en-US': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'fr-FR': ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
      'es-ES': ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
    };

    const months = {
      'de-DE': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      'en-US': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'fr-FR': ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
      'es-ES': ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
    };

    const currentLocale = this.locale as keyof typeof weekdays;
    const weekday = weekdays[currentLocale] || weekdays['de-DE'];
    const month = months[currentLocale] || months['de-DE'];

    const day = date.getDate();
    const monthName = month[date.getMonth()];
    const year = date.getFullYear();
    const weekdayName = weekday[date.getDay()];

    switch (this.format) {
      case 'full':
        return this.locale === 'en-US' 
          ? `${weekdayName}, ${monthName} ${day}, ${year}`
          : `${weekdayName}, ${day}. ${monthName} ${year}`;
      case 'medium':
        return this.locale === 'en-US'
          ? `${monthName} ${day}, ${year}`
          : `${day}. ${monthName} ${year}`;
      case 'short':
        const monthNum = String(date.getMonth() + 1).padStart(2, '0');
        const dayNum = String(day).padStart(2, '0');
        return this.locale === 'en-US'
          ? `${monthNum}/${dayNum}/${year}`
          : `${dayNum}.${monthNum}.${year}`;
      case 'weekday-only':
        return weekdayName;
      default:
        return `${weekdayName}, ${day}. ${monthName} ${year}`;
    }
  }
}
