import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DailyForecast } from '../models/daily-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {

  constructor() { }

  /**
   * Gibt dynamische 7-Tage-Wettervorhersage ab morgen zurück
   * @returns Observable<DailyForecast[]>
   */
  getDailyForecast(): Observable<DailyForecast[]> {
    const forecast = this.generateForecastFromTomorrow();
    return of(forecast);
  }

  /**
   * Generiert 7-Tage Forecast ab morgen
   */
  private generateForecastFromTomorrow(): DailyForecast[] {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    const weatherConditions = [
      { condition: 'Sonnig', icon: '/images/icon-sunny.webp' },
      { condition: 'Teilweise bewölkt', icon: '/images/icon-partly-cloudy.webp' },
      { condition: 'Bewölkt', icon: '/images/icon-overcast.webp' },
      { condition: 'Regnerisch', icon: '/images/icon-rain.webp' },
      { condition: 'Nieselregen', icon: '/images/icon-drizzle.webp' }
    ];
    
    const forecast: DailyForecast[] = [];
    
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(tomorrow);
      currentDate.setDate(tomorrow.getDate() + i);
      
      const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
      
      forecast.push({
        day: weekdays[currentDate.getDay()],
        date: currentDate.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
        temperature: Math.floor(Math.random() * 15) + 15, // 15-30°C
        condition: randomWeather.condition,
        icon: randomWeather.icon,
        humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
        windSpeed: Math.floor(Math.random() * 15) + 5, // 5-20 m/s
        precipitation: Math.floor(Math.random() * 100) // 0-100%
      });
    }
    
    return forecast;
  }

  /**
   * Gibt Dummy-Daten für einen einzelnen Tag zurück
   * @param dayIndex - Index des Tages (0-6)
   * @returns Observable<DailyForecast | null>
   */
  getForecastForDay(dayIndex: number): Observable<DailyForecast | null> {
    return new Observable(observer => {
      this.getDailyForecast().subscribe(forecast => {
        const dayForecast = forecast[dayIndex] || null;
        observer.next(dayForecast);
        observer.complete();
      });
    });
  }
}