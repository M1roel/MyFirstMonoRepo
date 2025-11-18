import { Component } from '@angular/core';
import { HeroStackedComponent } from 'atomic-components';

@Component({
  selector: 'app-main-page',
  imports: [HeroStackedComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
