import { Component } from '@angular/core';
import { HeadlineComponent } from '../../../atomic-components/src/lib/atoms/headline/headline.component';
import { SearchBarComponent } from '../../../atomic-components/src/lib/molecules/search-bar/search-bar.component';
import { InfoCardComponent } from '../../../atomic-components/src/lib/molecules/info-card/info-card.component';
import { ForecastCardComponent } from '../../../atomic-components/src/lib/molecules/forecast-card/forecast-card.component';

@Component({
  selector: 'app-root',
  imports: [InfoCardComponent, HeadlineComponent, SearchBarComponent, ForecastCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';
}
