import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'atomic-headline',
  imports: [NgClass],
  templateUrl: './headline.component.html',
  styleUrl: './headline.component.scss'
})
export class HeadlineComponent {
  @Input() headingText: string = 'Default Headline';
  @Input() level: number = 1;
  @Input() className: string = '';
}
