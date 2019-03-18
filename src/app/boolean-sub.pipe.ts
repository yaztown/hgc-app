import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanSub'
})
export class BooleanSubPipe implements PipeTransform {

  transform(value: boolean, args?: string): string {
    const subs = args.split(':');
    return value === true ? subs[0] : subs[1];
  }

}
