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
  @Input() headingText1: string = '';
  @Input() level1: number = 1;
  @Input() headingText2: string = '';
  @Input() level2: number = 2;
  @Input() headingText3: string = '';
  @Input() level3: number = 3;
  @Input() src1: string = '';
  @Input() alt1: string = '';
  @Input() src2: string = '';
  @Input() alt2: string = '';
  @Input() src3: string = '';
  @Input() alt3: string = '';
}
