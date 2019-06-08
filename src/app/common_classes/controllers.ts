import { Type } from '@angular/core';
//
export class ControllerJSON {
  uuid: string;
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
  _controller_on: boolean;
  info: object;
}

export class Controller {
  _type: string;
  value: ControllerJSON;
}
