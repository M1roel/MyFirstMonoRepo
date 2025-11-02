import { Component, Input } from '@angular/core';
import { HeadlineComponent, ImageComponent } from '../../../public-api';

@Component({
  selector: 'atomic-hero-section',
  imports: [HeadlineComponent, ImageComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() headingText: string = '';
  @Input() level: number = 1;
  @Input() src: string = '';
  @Input() alt: string = '';
}
