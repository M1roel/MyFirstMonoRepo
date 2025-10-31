import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent, InfoCardComponent, TextComponent } from '../../../public-api';

@Component({
  selector: 'atomic-hourly-forecast',
  imports: [CommonModule, DropdownComponent, InfoCardComponent, TextComponent],
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.scss'
})
export class HourlyForecastComponent {
  @Input() label: string = 'Stündliche Vorhersage';
}
