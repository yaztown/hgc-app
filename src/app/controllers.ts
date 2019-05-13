import { Type } from '@angular/core';
//
export class DeviceControllerJSON {
  loop_sleep_time: number;
  name: string;
  daemon: boolean;
  is_alive: boolean;
  _started: boolean;
  _exit_loop: boolean;
  _paused: boolean;
  _is_stopped: boolean;
  relay_pin: number[];
  manual_control: boolean;
  _device_on: boolean;
  info: object;
}

export class DeviceController {
  _type: string;
  value: DeviceControllerJSON;
}


export class DeviceControllerItem {
  constructor(public component: Type<any>, _type: string, public data: any) {}
}
