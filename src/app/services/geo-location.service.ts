import { Injectable } from '@angular/core';
import { GeoLocation } from '../models/widgets/weather.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor() { }

  getPosition(): Observable<GeoLocation> {
    return new Observable<GeoLocation>((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude});
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }

}
