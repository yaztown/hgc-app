import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[controller-host]'
})
export class ControllerHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
