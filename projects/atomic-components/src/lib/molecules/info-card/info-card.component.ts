import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent, IconComponent } from '../../../public-api';

@Component({
  selector: 'atomic-info-card',
  imports: [TextComponent, CommonModule , IconComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() unit: string = '';
  @Input() icon?: string;
}
