import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atomic-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() items: string[] = [];
  @Input() type: 'unordered' | 'ordered' = 'unordered'; // ul oder ol
  @Input() variant: 'default' | 'bullet' | 'numbered' | 'checkmark' | 'dash' = 'default';
}
