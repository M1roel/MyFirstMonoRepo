import { Component, Input } from '@angular/core';
import { FooterLinksComponent, FooterLink } from '../../molecules/footer/footer-links/footer-links.component';

@Component({
  selector: 'atomic-footer',
  imports: [FooterLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() unternehmenLinks: FooterLink[] = [];
  @Input() leistungLinks: FooterLink[] = [];
  
}