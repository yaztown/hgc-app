import { Component, OnInit } from '@angular/core';
import { DeviceController } from '../controllers';
import { ControllerService } from '../controller.service';
import * as _ from 'lodash';
import { interval } from 'rxjs';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {
  controllers: DeviceController[];

  constructor(
    private controllerService: ControllerService
  ) { }

  ngOnInit() {
    this.getControllers();
    const timer = interval(5000);
    timer.subscribe(() => {
      this.getControllers();
    });
  }

  getControllers() {
    this.controllerService.getControllers()
      .subscribe(controllers => {
        if (!_.isEqual(this.controllers, controllers)) {
        // if (JSON.stringify(this.controllers) !== JSON.stringify(controllers)) {
            this.controllers = controllers; // as DeviceController[];
        }
      });
  }
}
