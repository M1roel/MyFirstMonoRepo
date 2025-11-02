import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InfoCardComponent } from '../../molecules/info-card/info-card.component';
import { HeadlineComponent } from '../../atoms/headline/headline.component';
import { DailyForecast } from '../../../../../weather-app/src/app/core/models/daily-forecast.model';

@Component({
  selector: 'atomic-daily-forecast',
  imports: [CommonModule, InfoCardComponent, HeadlineComponent],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.scss'
})
export class DailyForecastComponent {
  @Input() dummyForecast: DailyForecast[] = [];
  @Input() headingText: string = '';
  @Input() level: number = 2;
}
