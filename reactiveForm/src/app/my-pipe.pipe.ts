import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(name:string,gender:string): string {
   if(gender.toLowerCase()=="male"){
    return "Mr." + name
   }
   else{
    return "Miss." + name
   }
  }

}
