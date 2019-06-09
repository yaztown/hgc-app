import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Controller } from '../common_classes/controllers';
import { ControllerHostDirective } from '../directives/controller-host.directive';
import { TimingControllerInfoComponent } from './controller_info_components/timing-controller-info/timing-controller-info.component';
import { ControllerInfo } from '../ifaces/controller-info.iface';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit, OnDestroy {

  @Input() controller: Controller;
  @ViewChild(ControllerHostDirective) controllerHost: ControllerHostDirective;

  public showInfo: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  interval: any;

  ngOnInit() {
    this.loadControllerComponent();
    this.getInfo();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadControllerComponent() {
    //
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(TimingControllerInfoComponent);
    let viewContainerRef = this.controllerHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as ControllerInfo).info = this.controller.value.info;
    //
  }

  getInfo() {
    this.interval = setInterval(() => {
      this.loadControllerComponent();
    }, 3000);
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
