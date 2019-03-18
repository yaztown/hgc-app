import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceOnStatus'
})
export class DeviceOnStatusPipe implements PipeTransform {

  transform(value: boolean): string {
    return value === true ? 'On' : 'Off';
  }

}
