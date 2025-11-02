import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TextComponent } from '../../atoms/text/text.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'atomic-dropdown',
  imports: [TextComponent, IconComponent, CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  @Input() variant: 'primary' | 'wa-dropdown' = 'primary';
  @Input() options: string[] = [
    'Montag',
    'Dienstag', 
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag'
  ];
  @Output() selectionChange = new EventEmitter<string>();

  selectedOption: string = '';
  isOpen: boolean = false;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectWeekday(weekday: string): void {
    this.selectedOption = weekday;
    this.isOpen = false;
    this.selectionChange.emit(weekday);
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.isOpen = false;
    this.selectionChange.emit(option);
  }
}
