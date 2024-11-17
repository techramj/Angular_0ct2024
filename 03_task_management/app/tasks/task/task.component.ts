import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from '../../task';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input() task!:Task;
 @Output() select = new EventEmitter<Task>();


 onCompleteTask(){
  this.select.emit(this.task);
 }

}
