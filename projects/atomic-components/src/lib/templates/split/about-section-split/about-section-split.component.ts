import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../../atoms/text/text.component';
import { ImageComponent } from '../../../atoms/image/image.component';

export interface AboutImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'atomic-about-section-split',
  imports: [CommonModule, TextComponent, ImageComponent],
  templateUrl: './about-section-split.component.html',
  styleUrl: './about-section-split.component.scss'
})
export class AboutSectionSplitComponent {
  @Input() text: string = '';
  @Input() images: AboutImage[] = [];
}
