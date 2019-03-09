import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wubba'
})
export class WubbaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `WubbaLubbaDub${value}`;
  }

}
