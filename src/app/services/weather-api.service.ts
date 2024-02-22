import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeoLocation, WeatherData } from '../models/widgets/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  apiUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(
    private http: HttpClient
  ) { }

  getForecast(coords: GeoLocation, currentDataParams: string[]): Observable<WeatherData> {
    const params = new HttpParams().appendAll({
      latitude: coords.latitude.toFixed(2),
      longitude: coords.longitude.toFixed(2),
      current: currentDataParams?.join(',')
    })


    return this.http.get<WeatherData>(this.apiUrl, {
      params: params
    });
  }

}
