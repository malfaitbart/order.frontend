import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',
  pure: false
})
export class SearchfilterPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) {
      return [];
    }

    return items.filter(function(item) {
      for(let property in item){
        if (item[property] === null){
          continue;
        }
        if(item[property].toString().toLowerCase().includes(term.toLowerCase())){
          return true;
        }
      }
      return false;
    });
  }
}