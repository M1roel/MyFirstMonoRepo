import { Component } from '@angular/core';
import { TextComponent, IconComponent } from '../../../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atomic-dropdown',
  imports: [TextComponent, IconComponent, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  
  weekdays: string[] = [
    'Montag',
    'Dienstag', 
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag'
  ];

}
