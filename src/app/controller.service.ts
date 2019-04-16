import { Injectable } from '@angular/core';
import { DeviceController, DeviceControllerItem } from './controllers';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable, of, throwError } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private controllersUrl = environment.apiUrl + '/api/controllers';

  constructor(
    private http: HttpClient,
  ) { }

  getControllers(): Observable<DeviceController[]> {
    //
    return this.http.get(this.controllersUrl)
      .pipe(
        map((x: any[]) => {
          return x.map(y => y.value) as DeviceController[];
        }), catchError(error => {
              return throwError('Why here');
        })
      );
  }

  getControllersFull(): Observable<DeviceControllerItem[]> {
    //
    return this.http.get(this.controllersUrl)
      .pipe(
        map((x: any[]) => {
          return x.map(y => y.value) as DeviceControllerItem[];
        }), catchError(error => {
              return throwError('Why here');
        })
      );
  }

}
