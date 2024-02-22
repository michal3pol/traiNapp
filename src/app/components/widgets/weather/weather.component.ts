import { Component } from '@angular/core';
import { GeoLocationService } from '../../../services/geo-location.service';
import { Observable, switchMap } from 'rxjs';
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
export class WeatherComponent {
  position$: Observable<GeoLocation> = this.geoLocationService.getPosition();

  weather$: Observable<WeatherData> = this.position$.pipe(
    switchMap((coords) => {
      return this.weatherApiService.getForecast(
        coords,
        Object.keys(this.userParams.value)
      );
    })
  );

  userParams = this.formBuilder.group({
    temperature_2m: true,
    wind_speed_10m: false,
    rain: false,
  });

  constructor(
    private geoLocationService: GeoLocationService,
    private weatherApiService: WeatherApiService,
    private formBuilder: FormBuilder
  ) {}
}
