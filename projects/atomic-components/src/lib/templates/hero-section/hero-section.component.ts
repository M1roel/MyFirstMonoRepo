import { Component, Input } from '@angular/core';
import { HeadlineComponent } from '../../atoms/headline/headline.component';
import { ImageComponent } from '../../atoms/image/image.component';
import { CommonModule } from '@angular/common';

export interface HeroHeading {
  text: string;
  level: number;
}

export interface HeroImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'atomic-hero-section',
  imports: [HeadlineComponent, ImageComponent, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input() headings: HeroHeading[] = [];
  @Input() images: HeroImage[] = [];
}
