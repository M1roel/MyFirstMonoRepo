import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Get weather data for a specific city
   * @param city City name
   * @returns Observable<WeatherData>
   */
  getWeather(city: string): Observable<WeatherData> {
    const url = `${this.apiUrl}/weather/${city}`;
    
    return this.http.get(url, { 
      responseType: 'text',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).pipe(
      map(response => {
        const data = JSON.parse(response as string);
        return data as WeatherData;
      }),
      catchError(error => {
        return throwError(() => error);
      })
    );
  }
}

