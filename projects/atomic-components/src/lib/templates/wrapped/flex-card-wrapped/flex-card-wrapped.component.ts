import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FlexibleCardComponent } from '../../../molecules/flexible-card/flexible-card.component';

export interface CardData {
  topContent: string;
  midContent: string;
  bottomContent: string;
  variant?: 'primary' | 'business';
}

@Component({
  selector: 'atomic-flex-card-wrapped',
  imports: [NgClass, FlexibleCardComponent],
  templateUrl: './flex-card-wrapped.component.html',
  styleUrl: './flex-card-wrapped.component.scss'
})
export class FlexCardWrappedComponent {
  @Input() variant: 'primary' | 'business' = 'primary';
  @Input() cards: CardData[] = [];
}
 