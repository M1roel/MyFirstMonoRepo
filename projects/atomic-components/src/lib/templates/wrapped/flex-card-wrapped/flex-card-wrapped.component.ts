import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { FlexibleCardComponent } from '../../../molecules/flexible-card/flexible-card.component';
import { ButtonComponent } from '../../../atoms/button/button.component';
import { HeadlineComponent } from '../../../atoms/headline/headline.component';

export interface CardData {
  topContent?: string;
  midContent: string;
  bottomContent?: string;
  buttonLabel?: string;
  buttonAction?: () => void;
  variant: 'primary' | 'business';
  headingText?: string;
}

@Component({
  selector: 'atomic-flex-card-wrapped',
  imports: [NgClass, FlexibleCardComponent, ButtonComponent, HeadlineComponent],
  templateUrl: './flex-card-wrapped.component.html',
  styleUrl: './flex-card-wrapped.component.scss'
})
export class FlexCardWrappedComponent {
  @Input() variant: 'primary' | 'business' = 'primary';
  @Input() cards: CardData[] = [];
  @Input() headingText: string = '';
  @Input() headingLevel: number = 2;
}
 