import { Component, OnInit, inject, input } from '@angular/core';
import { Task } from '../task.model';
import { TasksService } from '../tasks.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent{
   task = input.required<Task>();
   private taskService = inject(TasksService);

   onComplete(){
    this.taskService.removeTasks(this.task().id);
   }

}
