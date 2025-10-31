export interface HourlyForecast {
  time: string;
  temperature: number;
  icon: string;
  humidity?: number;
  windSpeed?: number;
}