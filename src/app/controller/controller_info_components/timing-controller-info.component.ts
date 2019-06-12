import { Component, OnInit, Input } from '@angular/core';
import { ControllerInfo } from '../../ifaces/controller-info.iface';

@Component({
  selector: 'app-timing-controller-info',
  templateUrl: './timing-controller-info.component.html',
  styleUrls: ['./timing-controller-info.component.css']
})
export class TimingControllerInfoComponent implements OnInit, ControllerInfo {
  @Input() info: any;

  constructor() { }

  ngOnInit() {
  }

}
