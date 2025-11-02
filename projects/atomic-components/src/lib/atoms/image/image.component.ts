import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-image',
  imports: [],
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
