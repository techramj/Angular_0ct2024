import { Component, inject } from '@angular/core';
import { type Task } from './task.model';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  private taskService = inject(TasksService);
  userTasks: Task[] = [];

  constructor(){
    console.log('constructor called...');
  }

}
