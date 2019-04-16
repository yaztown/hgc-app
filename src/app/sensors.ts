//
export class HumidityTemperatureSensor {
    loop_sleepTime: number;
    name: string;
    daemon: boolean;
    isAlive: boolean;
    started: boolean;
    exitLoop: boolean;
    paused: boolean;
    isStopped: boolean;
    dataPin: number;
    sensor: number;
    buffMaxlen: number;
    saveData: boolean;
    saveDataDir: string;
    maxAcceptedHumidity: number;
    minAcceptedHumidity: number;
    maxAcceptedTemperature: number;
    minAcceptedTemperature: number;
    reading: {humidity: number, temperature: number};
}
