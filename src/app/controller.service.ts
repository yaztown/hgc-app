import { Injectable } from '@angular/core';
import { DeviceController } from './controllers/controllers';
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
          return x.map(y => y.value);
        }), catchError(error => {
              return throwError('Why here');
        })
      );
  }
}
