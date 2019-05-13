import { Injectable } from '@angular/core';
import { HumidityTemperatureSensor } from './sensors';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable, of, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private sensorsUrl = environment.apiUrl + '/api/sensors';  // URL to web api

  constructor(
    private http: HttpClient,
    ) { }

  getSensors(): Observable<HumidityTemperatureSensor[]> {
    return this.http.get<HumidityTemperatureSensor[]>(this.sensorsUrl);
    // return this.http.get(this.sensorsUrl)
    //   .pipe(
    //     map((x: any[]) => {
    //       return x.map((y) => {
    //         const v = y.value;
    //         return v;
    //       });
    //     }), catchError(error => {
    //       return throwError('Something went wrong');
    //   })
    // );
  }
}
