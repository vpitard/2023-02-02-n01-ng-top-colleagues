import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value > 0) {
      return "+ " + value;
    } else if(value < 0){
      return "- " + (value*-1);
    }
    else{
      return value;
    }
  }
}
