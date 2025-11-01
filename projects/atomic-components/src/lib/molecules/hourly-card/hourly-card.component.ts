import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent, IconComponent } from '../../../public-api';

@Component({
  selector: 'atomic-hourly-card',
  imports: [CommonModule, TextComponent, IconComponent],
  templateUrl: './hourly-card.component.html',
  styleUrl: './hourly-card.component.scss'
})
export class HourlyCardComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() value: string = '';
  @Input() unit: string = '';
}
