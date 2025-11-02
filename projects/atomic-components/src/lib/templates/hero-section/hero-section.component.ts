import { Component, Input } from '@angular/core';
import { HeadlineComponent } from '../../atoms/headline/headline.component';
import { ImageComponent } from '../../atoms/image/image.component';

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
