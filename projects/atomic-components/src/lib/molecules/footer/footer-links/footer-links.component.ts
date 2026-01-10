import { Component, Input } from '@angular/core';
import { HeadlineComponent } from '../../../atoms/headline/headline.component';
import { LinkComponent } from '../../../atoms/link/link.component';

export interface FooterLink {
  label: string;
  routerLink: string;
  variant?: 'primary' | 'business';
}

@Component({
  selector: 'atomic-footer-links',
  imports: [HeadlineComponent, LinkComponent],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss',
})
export class FooterLinksComponent {
  @Input() headingText: string = '';
  @Input() level: number = 3;
  @Input() footerLinks: FooterLink[] = [];
  @Input() variant: 'primary' | 'business' = 'primary';
}
