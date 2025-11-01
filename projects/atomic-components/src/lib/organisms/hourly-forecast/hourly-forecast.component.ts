import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, HourlyCardComponent, TextComponent } from '../../../public-api';
import { HourlyForecast } from '../../../../../weather-app/src/app/core/models/hourly-forecast.model';

@Component({
  selector: 'atomic-hourly-forecast',
  imports: [CommonModule, DropdownComponent, HourlyCardComponent, TextComponent],
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.scss'
})
export class HourlyForecastComponent {
  @Input() label: string = 'Stündliche Vorhersage';
  @Input() hourlyData: HourlyForecast[] = [];
  @Input() maxHours: number = 12;
}
