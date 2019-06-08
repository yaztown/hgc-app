//
export class HumidityTemperatureSensorJSON {
    loop_sleep_time: number;
    name: string;
    daemon: boolean;
    is_alive: boolean;
    _started: boolean;
    _exit_loop: boolean;
    _paused: boolean;
    _is_stopped: boolean;
    data_pin: number;
    sensor: number;
    buff_maxlen: number;
    save_data: boolean;
    save_data_dir: string;
    max_accepted_humidity: number;
    min_accepted_humidity: number;
    max_accepted_temperature: number;
    min_accepted_temperature: number;
    reading: {
        humidity: number,
        temperature: number
    };
}

export class HumidityTemperatureSensor {
    _type: string;
    value: HumidityTemperatureSensorJSON;
}
