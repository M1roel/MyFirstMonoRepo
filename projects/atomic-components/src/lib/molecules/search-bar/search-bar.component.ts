import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'atomic-search-bar',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search for a place...';
  @Input() buttonText: string = 'Search';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  currentValue: string = '';

  /**
   * Behandelt Änderungen im Input-Feld und speichert den aktuellen Wert
   * @param event - Das Input-Event vom HTML-Element
   */
  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.currentValue = target.value;
  }

  /**
   * Behandelt den Klick auf den Search-Button und emittiert den aktuellen Suchbegriff
   */
  onSearchClick() {
    this.search.emit(this.currentValue);
  }

  /**
   * Emittiert einen Suchbegriff direkt (für Backward Compatibility)
   * @param inputValue - Der zu suchende Begriff
   */
  onSearch(inputValue: string) {
    this.search.emit(inputValue);
  }
}
