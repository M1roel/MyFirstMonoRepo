import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../../atoms/image/image.component';
import { TextComponent } from '../../../atoms/text/text.component';
import { HeadlineComponent } from '../../../atoms/headline/headline.component';

export interface PhilosophyImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'atomic-philosophy-section-split',
  imports: [CommonModule, ImageComponent, TextComponent, HeadlineComponent],
  templateUrl: './philosophy-section-split.component.html',
  styleUrl: './philosophy-section-split.component.scss'
})
export class PhilosophySectionSplitComponent {
  @Input() headingText: string = '';
  @Input() descriptionText: string = '';
  @Input() subText: string = '';
  @Input() images: PhilosophyImage[] = [];
}
