import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number, inputValue: 'c' | 'f', outputValue?: 'c' | 'f') {
    let val:number;

    if(typeof value === 'string'){
      val = parseFloat(value);
    }else{
      val = value
    }

    let output:number;

    if(inputValue === 'c' && outputValue === 'f'){
      output = val * (9/5) + 32;
    }else if(inputValue === 'f' && outputValue === 'c'){
      output = (val -32) * 5/9
    }else{
      output = val;
    }

    let symbol: '°C' | '°F' ;

    if(!outputValue) {
      symbol = inputValue === 'c' ? '°C' : '°F';
    }else {
      symbol = outputValue === 'c' ? '°C' : '°F';
    }

    //return output+" "+symbol;
      return `${output.toFixed(2)} ${symbol}`;
  }

}
