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
    
    const forecast: DailyForecast[] = [];
    
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(tomorrow);
      currentDate.setDate(tomorrow.getDate() + i);
      
      forecast.push({
        day: weekdays[currentDate.getDay()],
        temperature: Math.floor(Math.random() * 15) + 15,
        icon: this.getRandomWeatherIcon()
      });
    }
    
    return forecast;
  }

  /**
   * Gibt ein zufälliges Wetter-Icon zurück
   */
  getRandomWeatherIcon(): string {
    const weatherIcons = [
      '/images/icon-sunny.webp',
      '/images/icon-partly-cloudy.webp',
      '/images/icon-overcast.webp',
      '/images/icon-rain.webp',
      '/images/icon-drizzle.webp'
    ];
    return weatherIcons[Math.floor(Math.random() * weatherIcons.length)];
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