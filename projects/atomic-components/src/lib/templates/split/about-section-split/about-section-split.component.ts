import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from '../../../atoms/text/text.component';
import { ImageComponent } from '../../../atoms/image/image.component';
import { ListComponent } from '../../../atoms/list/list.component';

export interface AboutImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'atomic-about-section-split',
  imports: [CommonModule, TextComponent, ImageComponent, ListComponent],
  templateUrl: './about-section-split.component.html',
  styleUrl: './about-section-split.component.scss'
})
export class AboutSectionSplitComponent {
  @Input() backgroundText: string = '';
  @Input() backgroundItems: string[] = [];
  @Input() exhibitionText: string = '';
  @Input() exhibitionItems: string[] = [];
  @Input() src: string = '';
  @Input() alt: string = '';
}
