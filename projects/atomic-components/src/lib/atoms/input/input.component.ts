import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'lib-input',
  imports: [NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() type: 'text' | 'password' | 'email' | 'number' | 'search' = 'text';
  @Input() placeholder: string = '';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
}
