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
