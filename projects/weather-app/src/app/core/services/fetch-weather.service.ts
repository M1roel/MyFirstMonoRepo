import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class FetchWeatherService {

  constructor(private weatherService: WeatherService) { }

  weatherData: WeatherData | null = null;

  /**
   * Ruft Wetterdaten für eine bestimmte Stadt ab und gibt ein Observable zurück
   * @param city - Der Name der Stadt, für die Wetterdaten abgerufen werden sollen
   * @returns Observable<WeatherData> mit den Wetterdaten
   */
  fetchWeather(city: string): Observable<WeatherData> {
    
    if (!city || city.trim().length === 0) {
      throw new Error('Please enter a city name');
    }

    return this.weatherService.getWeather(city.trim());
  }
}
