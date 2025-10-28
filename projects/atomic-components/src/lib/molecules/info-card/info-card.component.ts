import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../atoms/text/text.component';
import { IconComponent } from "../../atoms/icon/icon.component";

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
