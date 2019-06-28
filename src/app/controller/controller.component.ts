import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Controller } from '../common_classes/controllers';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material';
import { ControllerService } from '../services/controller.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  @Input() controller: Controller;
  @Output() manualToggle: EventEmitter<any> = new EventEmitter<any>();

  public showInfo: boolean;

  constructor(private controllerService: ControllerService) { }

  slideToggleChanged(sliderEvent: MatSlideToggleChange) {
    //
    const slider: MatSlideToggle = sliderEvent.source;
    this.toggleManualSwitch();
  }

  toggleManualSwitch() {
    if (this.controller.value.manual_control) {
      this.controllerService.setControllerAutomatic(this.controller.value.uuid)
      .subscribe((controller: Controller) => {
        console.log(controller);
      });
    } else {
      this.controllerService.setControllerManual(this.controller.value.uuid)
        .subscribe((controller: Controller) => {
          console.log(controller);
        });
    }
  }
}
