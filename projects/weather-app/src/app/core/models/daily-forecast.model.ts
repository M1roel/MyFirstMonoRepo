export interface DailyForecast {
  day: string;
  date?: string;
  temperature: number;
  condition?: string;
  icon: string;
  humidity?: number;
  windSpeed?: number;
  precipitation?: number;
}