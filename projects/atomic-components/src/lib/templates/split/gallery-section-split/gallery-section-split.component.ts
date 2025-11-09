import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadlineComponent } from '../../../atoms/headline/headline.component';
import { ImageComponent } from '../../../atoms/image/image.component';
import { TextComponent } from '../../../atoms/text/text.component';

export interface GalleryItem {
  src: string;
  alt: string;
  number: string;
  text: string;
  subtext: string;
}

@Component({
  selector: 'atomic-gallery-section-split',
  imports: [HeadlineComponent, ImageComponent, TextComponent],
  templateUrl: './gallery-section-split.component.html',
  styleUrl: './gallery-section-split.component.scss'
})
export class GallerySectionSplitComponent {
  @Input() headingText: string = '';
  @Input() item: GalleryItem[] = [];
}
