import { compileNgModule } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any[], query: string): any[] {
    if (!value.length) return value;
    if (!query) return value;
    query = query.toLowerCase();

    // fatching data by key
    // let res = value.filter((item: any) => {
    //   return item.firstname.toLowerCase().includes(query) || item.lastname.toLowerCase().includes(query) || item.address.toLowerCase().includes(query)
    // });

    // fatching data by object iteration
    let res = value.filter((item: any) => {
      for (const key in item) {
        if (item[key].toString().toLowerCase().includes(query)) {
          let res2 = item[key].toString().toLowerCase().includes(query)
          return res2
        }
      }
    });

    return res;
  }

}
