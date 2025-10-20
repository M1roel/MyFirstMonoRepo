import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() iconSrc: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
  @Input() class: string = '';
}
