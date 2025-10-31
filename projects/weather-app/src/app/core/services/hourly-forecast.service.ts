import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HourlyForecast } from '../models/hourly-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class HourlyForecastService {

  private readonly weatherIcons = [
    '/images/icon-sunny.webp',
    '/images/icon-partly-cloudy.webp',
    '/images/icon-overcast.webp',
    '/images/icon-rain.webp',
    '/images/icon-drizzle.webp'
  ];

  constructor() { }

  /**
   * Generiert zufällige stündliche Wetterdaten für die nächsten 24 Stunden
   * @returns Observable<HourlyForecast[]>
   */
  getHourlyForecast(): Observable<HourlyForecast[]> {
    const hourlyData: HourlyForecast[] = [];
    const currentHour = new Date().getHours();
    
    for (let i = 0; i < 24; i++) {
      const hour = (currentHour + i) % 24;
      const timeString = hour.toString().padStart(2, '0') + ':00';
      
      hourlyData.push({
        time: timeString,
        temperature: this.getRandomTemperature(),
        icon: this.getRandomIcon(),
        humidity: this.getRandomHumidity(),
        windSpeed: this.getRandomWindSpeed()
      });
    }

    return of(hourlyData);
  }

  /**
   * Generiert eine zufällige Temperatur zwischen 5 und 25 Grad
   */
  private getRandomTemperature(): number {
    return Math.floor(Math.random() * 21) + 5; // 5-25°C
  }

  /**
   * Wählt ein zufälliges Wetter-Icon aus
   */
  private getRandomIcon(): string {
    const randomIndex = Math.floor(Math.random() * this.weatherIcons.length);
    return this.weatherIcons[randomIndex];
  }

  /**
   * Generiert zufällige Luftfeuchtigkeit zwischen 30 und 95%
   */
  private getRandomHumidity(): number {
    return Math.floor(Math.random() * 66) + 30; // 30-95%
  }

  /**
   * Generiert zufällige Windgeschwindigkeit zwischen 0 und 20 m/s
   */
  private getRandomWindSpeed(): number {
    return Math.floor(Math.random() * 21); // 0-20 m/s
  }

  /**
   * Gibt nur die nächsten X Stunden zurück (für begrenzte Anzeige)
   * @param hours - Anzahl der Stunden
   */
  getNextHours(hours: number): Observable<HourlyForecast[]> {
    return new Observable(observer => {
      this.getHourlyForecast().subscribe(forecast => {
        const limitedForecast = forecast.slice(0, hours);
        observer.next(limitedForecast);
        observer.complete();
      });
    });
  }
}