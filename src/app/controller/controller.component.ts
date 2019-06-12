import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Controller } from '../common_classes/controllers';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  @Input() controller: Controller;
  public showInfo: boolean;

  constructor() { }

}
