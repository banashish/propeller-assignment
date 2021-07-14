import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: [{name: string}], searchQuery: string): unknown {
    if(!items){
      return []
    }
    if(!searchQuery){
      return items
    }

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
  }

}
