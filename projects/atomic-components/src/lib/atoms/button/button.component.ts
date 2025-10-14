import { NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'atomic-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'wa-search-btn' = 'primary';
}
