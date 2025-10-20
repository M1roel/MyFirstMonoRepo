import { Component } from '@angular/core';
import { TextComponent } from '../../../atomic-components/src/lib/atoms/text/text.component';
import { HeadlineComponent } from '../../../atomic-components/src/lib/atoms/headline/headline.component';
import { SearchBarComponent } from '../../../atomic-components/src/lib/molecules/search-bar/search-bar.component';
import { InfoCardComponent } from '../../../atomic-components/src/lib/molecules/info-card/info-card.component';

@Component({
  selector: 'app-root',
  imports: [InfoCardComponent, HeadlineComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
}
