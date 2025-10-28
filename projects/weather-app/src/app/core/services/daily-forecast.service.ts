import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DailyForecast } from '../models/daily-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {

  constructor() { }

  /**
   * Gibt Dummy-Daten für eine 7-Tage-Wettervorhersage zurück
   * @returns Observable<DailyForecast[]>
   */
  getDailyForecast(): Observable<DailyForecast[]> {
    const dummyForecast: DailyForecast[] = [
      {
        day: 'Montag',
        date: '28.10.',
        temperature: 18,
        condition: 'Sonnig',
        icon: '/images/icon-sunny.webp',
        humidity: 65,
        windSpeed: 12,
        precipitation: 0
      },
      {
        day: 'Dienstag',
        date: '29.10.',
        temperature: 16,
        condition: 'Bewölkt',
        icon: '/images/icon-overcast.webp',
        humidity: 78,
        windSpeed: 8,
        precipitation: 20
      },
      {
        day: 'Mittwoch',
        date: '30.10.',
        temperature: 14,
        condition: 'Regnerisch',
        icon: '/images/icon-rain.webp',
        humidity: 85,
        windSpeed: 15,
        precipitation: 75
      },
      {
        day: 'Donnerstag',
        date: '31.10.',
        temperature: 12,
        condition: 'Gewitter',
        icon: '/images/icon-storm.webp',
        humidity: 90,
        windSpeed: 22,
        precipitation: 95
      },
      {
        day: 'Freitag',
        date: '01.11.',
        temperature: 15,
        condition: 'Teilweise bewölkt',
        icon: '/images/icon-partly-cloudy.webp',
        humidity: 70,
        windSpeed: 10,
        precipitation: 30
      },
      {
        day: 'Samstag',
        date: '02.11.',
        temperature: 19,
        condition: 'Sonnig',
        icon: '/images/icon-sunny.webp',
        humidity: 60,
        windSpeed: 6,
        precipitation: 5
      },
      {
        day: 'Sonntag',
        date: '03.11.',
        temperature: 21,
        condition: 'Heiter',
        icon: '/images/icon-sunny.webp',
        humidity: 55,
        windSpeed: 8,
        precipitation: 0
      }
    ];

    return of(dummyForecast);
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