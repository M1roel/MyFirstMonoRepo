import { Component, Input } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';

@Component({
  selector: 'atomic-info-card',
  imports: [TextComponent],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() unit: string = '';
}
