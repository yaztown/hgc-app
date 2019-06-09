import { Component, OnInit } from '@angular/core';
import { HumidityTemperatureSensor } from '../common_classes/sensors';
import { SensorService } from '../services/sensor.service';
// import * as _ from 'lodash';

import { interval } from 'rxjs';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {
  sensors: HumidityTemperatureSensor[] = [];

  constructor(
    private sensorService: SensorService
  ) { }

  ngOnInit() {
    this.listSensors();
    const timer = interval(2000);
    timer.subscribe(() => this.listSensors());
    // this.getSensors();
  }

  listSensors(): void {
    this.sensorService.listSensors()
      .subscribe(sensors => {
        // if (!_.isEqual(this.sensors, sensors)) {
          this.sensors = sensors;
        // }
    });
  }

  trackSensorByUUID(index, obj) {
    return obj.uuid;
  }

}
