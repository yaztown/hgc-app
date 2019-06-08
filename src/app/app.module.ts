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

@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    ControllersComponent,
    DeviceOnStatusPipe,
    BooleanSubPipe,
    TruncatePipe,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
