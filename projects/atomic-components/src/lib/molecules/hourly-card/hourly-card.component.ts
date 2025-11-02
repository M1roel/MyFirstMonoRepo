import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../atoms/text/text.component';
import { IconComponent } from '../../atoms/icon/icon.component';

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
