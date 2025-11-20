import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'atomic-flexible-card',
  imports: [NgClass],
  templateUrl: './flexible-card.component.html',
  styleUrl: './flexible-card.component.scss'
})
export class FlexibleCardComponent {
  @Input() variant: 'primary' | 'business' = 'primary';
}
