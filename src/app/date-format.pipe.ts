import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    const formattedDate = format(new Date(value), 'dd/MM/yyyy');
    return formattedDate;
  }
}
