import { Injectable } from '@angular/core';
import { Controller } from '../common_classes/controllers';
import { HgcRPCService } from '../hgc-rpc/hgc-rpc.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { controllerInfoComponentMap } from '../common_classes/controller-info-map';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  constructor(
    private hgcRPCService: HgcRPCService
  ) { }

  listControllers(): Observable<Controller[]> {
    return this.hgcRPCService.sendRpcRequest('Controller.list_controllers', []);
  }

  listControllersWithComponent(): Observable<Controller[]> {
    return this.listControllers()
      .pipe(
        map((controllers: Controller[]) => {
          return controllers.map(ctrl => {
            ctrl.component = controllerInfoComponentMap[ctrl._type];
            return ctrl;
          } );
        })
      );
  }

  // getControllersFull(): Observable<DeviceControllerJSON[]> {
  //   //
  //   return this.http.get(this.controllersUrl)
  //     .pipe(
  //       map((x: any[]) => {
  //         return x.map(y => y.value) as DeviceControllerJSON[];
  //       }), catchError(error => {
  //             return throwError('Why here');
  //       })
  //     );
  // }

}
