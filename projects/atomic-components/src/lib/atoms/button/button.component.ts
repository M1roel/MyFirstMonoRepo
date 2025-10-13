import { NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'primary' | 'secondary' | 'tertiary' | 'wa-search-btn' = 'primary';
}
