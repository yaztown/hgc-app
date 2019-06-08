import { Injectable } from '@angular/core';
import { HumidityTemperatureSensor, HumidityTemperatureJSON } from './sensors';
import { HgcRPCService } from './hgc-rpc/hgc-rpc.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  constructor(
    private hgcRPCService: HgcRPCService
    ) { }

    listSensors(): Observable<HumidityTemperatureJSON[]> {
      const res = this.hgcRPCService.sendRpcRequest('Sensor.list_sensors', []);
      return res.pipe(
        map((x: HumidityTemperatureSensor[]) => x.map(y => y.value)),
        catchError(error =>  throwError('Error in method listSensors()'))
      );
    }
}
