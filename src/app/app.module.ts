import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';

import { HttpClientModule } from '@angular/common/http';
import { ControllersComponent } from './controllers/controllers.component';
import { DeviceOnStatusPipe } from './pipes/device-on-status.pipe';
import { BooleanSubPipe } from './pipes/boolean-sub.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ControllerComponent } from './controller/controller.component';
import { MapValuePipe } from './pipes/map-value.pipe';
import { ParseDatePipe } from './pipes/parse-date.pipe';
import { TimingControllerInfoComponent } from './controller/controller_info_components/timing-controller-info/timing-controller-info.component';
import { ControllerHostDirective } from './directives/controller-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    ControllersComponent,
    DeviceOnStatusPipe,
    BooleanSubPipe,
    TruncatePipe,
    ControllerComponent,
    MapValuePipe,
    ParseDatePipe,
    TimingControllerInfoComponent,
    ControllerHostDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
    TimingControllerInfoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
