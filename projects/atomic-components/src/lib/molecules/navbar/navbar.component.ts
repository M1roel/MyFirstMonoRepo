import { Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon.component';
import { LinkComponent } from '../../atoms/link/link.component';
import { NgClass } from '@angular/common';

export interface NavLink {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'atomic-navbar',
  imports: [IconComponent, LinkComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() iconSrc: string = '';
  @Input() alt: string = '';
  @Input() title: string = '';
  @Input() class: string = '';
  @Input() variant: 'primary' | 'business' = 'primary';
  @Input() navLinks: NavLink[] = [];
}
