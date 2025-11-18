import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'atomic-link',
  imports: [RouterLink, NgClass],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class LinkComponent {
  @Input() routerLink: string = '';
  @Input() label: string = '';
  @Input() variant: 'primary' | 'business' = 'primary';
}
