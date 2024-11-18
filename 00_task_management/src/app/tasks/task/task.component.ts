import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { type Task } from '../../model/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input() task!:Task ;
 //taskService = new TasksService();
 //inject can be done in two way. using contrutor and another one is using inject function
 
  //constructor(private tasksService: TasksService){} 
  tasksService = inject(TasksService);
  
 onCompleteTask(){
  this.tasksService.removeTasks(this.task.id);
 }

}
