import { Component } from '@angular/core';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [BComponent],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
  a:number = 10;
  b:number = 0;

  onAssignValue(num:number){
    console.log('AComponent#onAssignValue function called', num);
    this.b = num;
  }
}
