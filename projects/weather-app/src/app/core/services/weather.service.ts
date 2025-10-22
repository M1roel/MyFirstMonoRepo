import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:3000/api/weather';

  constructor(private http: HttpClient) { }

  /**
   * Holt alle Wetterdaten für eine bestimmte Stadt.
   * @param city - Der Name der Stadt, für die Wetterdaten abgerufen werden sollen.
   * @returns Ein Observable mit allen Wetterdaten.
   */
  getWeather(city: string) {
    return this.http.get<WeatherData>(`${this.apiUrl}/${city}`);
  }
}

