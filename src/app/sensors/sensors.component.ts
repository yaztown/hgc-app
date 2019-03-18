import { Component, OnInit } from '@angular/core';
import { HumidityTemperatureSensor } from './sensors';
import { SensorService } from '../sensor.service';

import { interval } from 'rxjs';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  sensors: HumidityTemperatureSensor[];

  constructor(
    private sensorService: SensorService
  ) { }

  ngOnInit() {
    const timer = interval(1000);
    timer.subscribe(() => this.getSensors());
    // this.getSensors();
  }

  getSensors(): void {
    this.sensorService.getSensors()
      .subscribe((sensors) => {
        this.sensors = sensors;
    });
  }
}
