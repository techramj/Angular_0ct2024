import { Component, Input } from '@angular/core';
import { type Task } from '../../task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input() task!:Task;

}
