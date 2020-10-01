import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(value: string, args: string): unknown {
    console.log(value);
    console.log(args);
    return value + '' + args + ' about this ' + value;
  }

}
