import { Component } from '@angular/core';
import { TemperaturePipe } from '../../shared/pipes/temperature.pipe';
import { SortPipe } from '../../shared/pipes/sort.pipe';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [TemperaturePipe, SortPipe],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {

  currentTemperature = {
    mumbai:30.523,
    pune : 24.34,
    kolkata: 31.32,
    delhi : 21.3456
  }

  historicTemperatures = [22,26, 18,19,32,16,31,20, -2, 0,12];

  reset(idx:number){
    console.log('click on idx=',idx,'   number is ',this.historicTemperatures[idx]);
    this.historicTemperatures[idx] = this.currentTemperature.pune;
  }

}
