import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transpipe'
})
export class TranspipePipe implements PipeTransform {

  transform(value: number, unit: string,extension:string="") {
    if(value){
    if (unit === 'C') {
      extension="C";
      var temp = (value - 32) / 1.8
      return temp.toFixed(2) + extension
    }
    else if (unit === 'F') {
      extension="F";
      var temp = (value * 1.8) + 32
      return temp.toFixed(2) + extension
    }
  }
    return
  }
}
