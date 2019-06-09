import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {

  transform(dateString: string, args?: any): Date {
    return new Date(Date.parse(dateString));
  }

}
