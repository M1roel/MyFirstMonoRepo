import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InfoCardComponent } from '../../molecules/info-card/info-card.component';
import { DailyForecast } from '../../../../../weather-app/src/app/core/models/daily-forecast.model';

@Component({
  selector: 'atomic-daily-forecast',
  imports: [CommonModule, InfoCardComponent],
  templateUrl: './daily-forecast.component.html',
  styleUrl: './daily-forecast.component.scss'
})
export class DailyForecastComponent {
  @Input() dummyForecast: DailyForecast[] = [];
}
