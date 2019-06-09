import { Injectable } from '@angular/core';
import { HumidityTemperatureSensor } from '../common_classes/sensors';
import { HgcRPCService } from '../hgc-rpc/hgc-rpc.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  constructor(
    private hgcRPCService: HgcRPCService
    ) { }

    listSensors(): Observable<HumidityTemperatureSensor[]> {
      return this.hgcRPCService.sendRpcRequest('Sensor.list_sensors', []);
      // return res.pipe(
      //   map((x: HumidityTemperatureSensor[]) => x.map(y => y.value)),
      //   catchError(error =>  throwError('Error in method listSensors()'))
      // );
    }
}
