import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'archiveBadge'
})
export class ArchiveBadgePipe implements PipeTransform {

  transform(items: any): unknown {
    // console.log("items: ", items);
    let item_number:number = 0;
    for (let i of items){
      // console.log(i);
      item_number++;
    }
    // console.log("Quantity in pipe: ",item_number);
    
    return item_number;
  }

}
