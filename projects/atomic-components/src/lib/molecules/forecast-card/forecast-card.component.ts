import { Component, Input } from '@angular/core';
import { TextComponent, DateComponent, IconComponent } from '../../../public-api';

@Component({
  selector: 'atomic-forecast-card',
  standalone: true,
  imports: [TextComponent, DateComponent, IconComponent],
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent {
  @Input() format: string = '';
  @Input() locale: string = '';
  @Input() className: string = '';
  @Input() text: string = '';
  
  // Wetter-App-spezifische Inputs
  @Input() city: string = '';
  @Input() temperature: number = 0;
  @Input() condition: string = '';
  @Input() weatherIcon: string = '';
  @Input() backgroundImage: string = '/images/bg-today-small.svg';
}
