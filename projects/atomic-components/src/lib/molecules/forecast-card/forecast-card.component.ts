import { Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { DateComponent } from '../../atoms/date/date.component';
import { IconComponent } from '../../atoms/icon/icon.component';

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
}
