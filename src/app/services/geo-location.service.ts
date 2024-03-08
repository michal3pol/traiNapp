import { Injectable } from '@angular/core';
import { GeoLocation } from '../models/widgets/weather.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor() { }

  // initial value - Warsaw
  private positionSubject = new BehaviorSubject<GeoLocation>({
    latitude: 52.22977,
    longitude: 21.01178
  });

  position$: Observable<GeoLocation> = this.positionSubject.asObservable();

  setNavigatorCurrentPosition(): void {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.positionSubject.next({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      }
    )
  }

  setUserCurrentPosition(latitude: number, longitude: number): void {
    this.positionSubject.next({
      latitude: latitude,
      longitude: longitude
    })
  }

}
