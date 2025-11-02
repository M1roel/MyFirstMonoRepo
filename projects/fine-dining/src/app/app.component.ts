import { Component } from '@angular/core';
import { HeroSectionComponent } from 'atomic-components';

@Component({
  selector: 'app-root',
  imports: [HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
