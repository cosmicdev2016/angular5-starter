import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  //transform(value: any, args?: any): any {
  transform(value: string, before: string, after: string): string {
    return before + '\t' + value.split('').reverse().join('') + '\t' + after;
  }

}
