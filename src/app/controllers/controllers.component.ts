import { Component, OnInit } from '@angular/core';
import { Controller } from '../common_classes/controllers';
import { ControllerService } from '../services/controller.service';
// import * as _ from 'lodash';
import { interval } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-controllers',
  templateUrl: './controllers.component.html',
  styleUrls: ['./controllers.component.css']
})
export class ControllersComponent implements OnInit {
  controllers: Controller[];

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
      .subscribe(controllers => this.controllers = controllers);
  }

  trackControllerByUUID(index: any, controller: Controller) {
    return controller.value.uuid;
  }
}
