import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsium'
})
export class CelsiumPipe implements PipeTransform {

  transform(value: number, arg: string): unknown {
    var temp = 0;
    if (arg === 'c') {
      temp = value-273.15;
    } else if (arg === 'f') {
      temp = (value-273.15) * 9/5 + 32;
    } 
    return Math.round(temp);
  }

}
