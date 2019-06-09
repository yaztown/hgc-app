import { Pipe, PipeTransform } from '@angular/core';
import { HumidityTemperatureSensor, HumidityTemperatureSensorJSON } from '../common_classes/sensors';

@Pipe({
  name: 'mapValue'
})
export class MapValuePipe implements PipeTransform {

  transform(objList: any[], args?: any) {
    if (objList === null) {
      return [];
    }
    return objList.map(x => x.value);
  }
}
