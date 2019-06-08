import { Component, OnInit } from '@angular/core';
import { ControllerJSON } from '../controllers';
import { ControllerService } from '../controller.service';
// import * as _ from 'lodash';
import { interval } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {
  controllers: ControllerJSON[];

  constructor(
    private controllerService: ControllerService
  ) { }

  ngOnInit() {
    this.listControllers();
    const timer = interval(5000);
    timer.subscribe(() => {
      this.listControllers();
    });
  }

  listControllers(): void {
    this.controllerService.listControllers()
      .subscribe(controllers => {
        // if (!_.isEqual(this.controllers, controllers)) {
        // if (JSON.stringify(this.controllers) !== JSON.stringify(controllers)) {
            this.controllers = controllers; // as DeviceController[];
        // }
      });
  }

  trackByFn(index, obj) {
    return obj.uuid;
  }
}
