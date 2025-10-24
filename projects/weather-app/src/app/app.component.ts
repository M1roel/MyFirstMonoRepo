import { Component, OnInit } from '@angular/core';
import { HeadlineComponent } from '../../../atomic-components/src/lib/atoms/headline/headline.component';
import { SearchBarComponent } from '../../../atomic-components/src/lib/molecules/search-bar/search-bar.component';
import { InfoCardComponent } from '../../../atomic-components/src/lib/molecules/info-card/info-card.component';
import { ForecastCardComponent } from '../../../atomic-components/src/lib/molecules/forecast-card/forecast-card.component';
import { FetchWeatherService } from './core/services/fetch-weather.service';
import { WeatherData } from './core/models/weather.model';

@Component({
  selector: 'app-root',
  imports: [InfoCardComponent, HeadlineComponent, SearchBarComponent, ForecastCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  
  currentCity: string = '';
  currentTemperature: number = 0;
  feelsLike: number = 0;
  humidity: number = 0;
  windSpeed: number = 0;
  visibility: number = 0;
  currentCondition: string = '';
  weatherIcon: string = '';
  isLoading: boolean = false;

  constructor(private fetchWeatherService: FetchWeatherService) {}

  /**
   * Konvertiert Sichtweite von Metern zu Kilometern
   */
  get visibilityInKm(): string {
    return (this.visibility / 1000).toFixed(1);
  }

  ngOnInit() {
    this.onSearch('Berlin');
  }

  /**
   * Behandelt das Search-Event von der Search-Bar und startet den Wetterdaten-Abruf
   * @param city - Der Name der Stadt, für die Wetterdaten abgerufen werden sollen
   */
  onSearch(city: string) {
    this.isLoading = true;
    this.currentCity = city;
    
    this.fetchWeatherService.fetchWeather(city).subscribe({
      next: (weatherData: WeatherData) => {        
        this.currentTemperature = Math.round(weatherData.main.temp);
        this.feelsLike = Math.round(weatherData.main.feels_like);
        this.humidity = weatherData.main.humidity;
        this.windSpeed = weatherData.wind.speed;
        this.visibility = weatherData.visibility;
        this.currentCondition = weatherData.weather[0].description;
        this.weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error fetching weather data:', error);
        this.isLoading = false;
      }
    });
  }
}
