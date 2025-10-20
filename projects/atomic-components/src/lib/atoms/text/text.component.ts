import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-text',
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
  @Input() text: string = '';
}
