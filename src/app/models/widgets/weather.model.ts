export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtimeMs: number;
  utcOffsetSeconds: number;
  timezone: string;
  timezoneAbbreviation: string;
  elevation: number;
  currentUnits: CurrentUnits;
  current: CurrentData;
}

export interface CurrentData {
  time: string;
  interval: number;
  temperature_2m: number;
  wind_speed_10m: number;
  rain: number;
}

export interface CurrentUnits {
  time: string;
  interval: string;
  temperature2m: string;
  wind_speed10m: string;
  rain: string;
}
