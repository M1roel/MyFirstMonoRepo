import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'atomic-input',
  imports: [NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type: 'text' | 'password' | 'email' | 'number' | 'search' | 'textarea' = 'text';
  @Input() placeholder: string = '';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' | 'wa-search' = 'primary';
}
