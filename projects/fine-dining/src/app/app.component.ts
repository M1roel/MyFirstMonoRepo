import { Component, Input } from '@angular/core';
import { HeroSectionComponent } from 'atomic-components';

@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() headingText1: string = 'EXQUISITE CULINARY ART';
  @Input() level1: number = 1;
  @Input() headingText2: string = 'LUMIÈRE';
  @Input() level2: number = 2;
  @Input() headingText3: string = 'FINE DINIG';
  @Input() level3: number = 3;
  @Input() src1: string = 'images/01.png';
  @Input() alt1: string = 'Exquisite Culinary Art';
  @Input() src2: string = 'images/02.png';
  @Input() alt2: string = 'Lumière Restaurant';
  @Input() src3: string = 'images/03.png';
  @Input() alt3: string = 'Fine Dining Experience';
}
