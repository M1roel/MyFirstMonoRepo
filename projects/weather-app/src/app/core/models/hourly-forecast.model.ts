export interface HourlyForecast {
  time: string;        // z.B. "14:00"
  temperature: number; // z.B. 18
  icon: string;        // Pfad zum Icon
  humidity?: number;   // Optional
  windSpeed?: number;  // Optional
}