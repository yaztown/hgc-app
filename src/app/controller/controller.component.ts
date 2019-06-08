import { Component, OnInit, Input } from '@angular/core';
import { Controller } from '../common_classes/controllers';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  @Input() controller: Controller;

  public showInfo: boolean;

  constructor() { }

  ngOnInit() {
    // this.showInfo = false;
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
