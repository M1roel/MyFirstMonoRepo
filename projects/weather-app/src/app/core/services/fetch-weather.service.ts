import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})

export class FetchWeatherService {

  constructor(private weatherService: WeatherService) { }

  weatherData: WeatherData | null = null;

  /**
   * Ruft Wetterdaten für eine bestimmte Stadt ab und speichert sie im Service
   * @param city - Der Name der Stadt, für die Wetterdaten abgerufen werden sollen
   */
  fetchWeather(city: string) {
    
    if (!city || city.trim().length === 0) {
      console.error('Please enter a city name'); // Hier wird später noch eine Snackbar o.ä. angezeigt
      return;
    }

    this.weatherService.getWeather(city.trim()).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (error) => {
        console.error('Error fetching weather data:', error); // Hier wird später noch eine Snackbar o.ä. angezeigt
      }
    });
  }
}
