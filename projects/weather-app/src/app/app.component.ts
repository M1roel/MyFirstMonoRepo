import { Component } from '@angular/core';
import { HeadlineComponent } from '../../../atomic-components/src/lib/atoms/headline/headline.component';
import { SearchBarComponent } from '../../../atomic-components/src/lib/molecules/search-bar/search-bar.component';
import { InfoCardComponent } from '../../../atomic-components/src/lib/molecules/info-card/info-card.component';
import { ForecastCardComponent } from '../../../atomic-components/src/lib/molecules/forecast-card/forecast-card.component';
import { FetchWeatherService } from './core/services/fetch-weather.service';

@Component({
  selector: 'app-root',
  imports: [InfoCardComponent, HeadlineComponent, SearchBarComponent, ForecastCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'weather-app';

  constructor(private fetchWeatherService: FetchWeatherService) {}

  /**
   * Behandelt das Search-Event von der Search-Bar und startet den Wetterdaten-Abruf
   * @param city - Der Name der Stadt, für die Wetterdaten abgerufen werden sollen
   */
  onSearch(city: string) {
    this.fetchWeatherService.fetchWeather(city);
  }
}
