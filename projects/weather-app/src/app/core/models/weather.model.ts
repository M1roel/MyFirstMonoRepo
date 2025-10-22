export interface WeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: Array<{
        id: number;
        main: string;
        description: string;
        icon: string;
    }>;
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        type?: number;
        id?: number;
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

// Hilfsfunktionen für Zeitstempel-Konvertierung
export class WeatherUtils {
    // Konvertiert Unix-Timestamp zu Date
    static timestampToDate(timestamp: number): Date {
        return new Date(timestamp * 1000);
    }
    
    // Formatiert Temperatur mit Einheit
    static formatTemperature(temp: number, unit: 'C' | 'F' = 'C'): string {
        const rounded = Math.round(temp);
        return unit === 'C' ? `${rounded}°C` : `${rounded}°F`;
    }
    
    // Hauptwetter-Icon URL für OpenWeather
    static getIconUrl(iconCode: string): string {
        return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    }
}