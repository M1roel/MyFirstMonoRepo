import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeadlineComponent } from '../../../atoms/headline/headline.component';
import { TextComponent } from '../../../atoms/text/text.component';
import { ButtonComponent } from '../../../atoms/button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'atomic-hero-stacked',
  imports: [HeadlineComponent, TextComponent, ButtonComponent, NgClass],
  templateUrl: './hero-stacked.component.html',
  styleUrl: './hero-stacked.component.scss'
})
export class HeroStackedComponent {
  @Input() headingText: string = '';
  @Input() subheadingText: string = '';
  @Input() buttonText: string = '';
  @Input() variant: 'primary' | 'business' = 'primary';
  @Output() buttonClick = new EventEmitter<void>();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
