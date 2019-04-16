import { Type } from '@angular/core';
//
export class DeviceController {
  loopSleepTime: number;
  name: string;
  daemon: boolean;
  isAlive: boolean;
  started: boolean;
  exitLoop: boolean;
  paused: boolean;
  isStopped: boolean;
  relayPin: number[];
  manualControl: boolean;
  deviceOn: boolean;
  info: object;
}

export class DeviceControllerItem {
  constructor(public component: Type<any>, _type: string, public data: any) {}
}
