import { Component, OnInit } from '@angular/core';
import { DeviceController } from './controllers';
import { ControllerService } from '../controller.service';

import { interval } from 'rxjs';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {
  controllers: DeviceController[];
  public showInfo: boolean;

  constructor(
    private controllerService: ControllerService
  ) { }

  ngOnInit() {
    const timer = interval(1000);
    timer.subscribe(() => {
      this.getControllers();
    });
    this.showInfo = false;
  }

  getControllers() {
    this.controllerService.getControllers()
      .subscribe((controllers) => {
        this.controllers = controllers;
      });
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
