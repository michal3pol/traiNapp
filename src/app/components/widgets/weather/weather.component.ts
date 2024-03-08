import { Component, OnInit } from '@angular/core';
import { GeoLocationService } from '../../../services/geo-location.service';
import { Observable, combineLatest, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
  GeoLocation,
  WeatherData,
} from '../../../models/widgets/weather.model';
import { WeatherApiService } from '../../../services/weather-api.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatIcon,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  position$: Observable<GeoLocation> = this.geoLocationService.position$;
  
  userParams = this.formBuilder.group({
    temperature_2m: false,
    wind_speed_10m: false,
    rain: false,
  });

  weather$: Observable<WeatherData> = combineLatest([this.position$, this.userParams.valueChanges]).pipe(
    switchMap(([location, params]) => {
      const filtered = Object.keys(params).filter((k) => {
        return params[k as keyof typeof params]
      })
      return this.weatherApiService.getForecast(
        location, filtered
      )
    })
  )

  constructor(
    private geoLocationService: GeoLocationService,
    private weatherApiService: WeatherApiService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // try to get data from user browser
    this.geoLocationService.setNavigatorCurrentPosition(); 


  }

}
