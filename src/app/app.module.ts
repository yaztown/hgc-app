import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SensorsComponent } from './sensors/sensors.component';

import { HttpClientModule } from '@angular/common/http';
import { ControllersComponent } from './controllers/controllers.component';
import { DeviceOnStatusPipe } from './device-on-status.pipe';
import { BooleanSubPipe } from './boolean-sub.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SensorsComponent,
    ControllersComponent,
    DeviceOnStatusPipe,
    BooleanSubPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
