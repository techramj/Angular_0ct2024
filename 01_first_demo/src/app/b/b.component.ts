import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
 @Input() x:number = 0;
  y:number = 1234;

  @Output() onAssign = new EventEmitter<number>();

  assignValue(){
    console.log('button clicked');
    this.onAssign.emit(this.y);
  }
}
