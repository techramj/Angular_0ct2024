import { Component, Input } from '@angular/core';
import { type Task } from '../model/task.model';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from '../model/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  //providers: [TasksService]
})
export class TasksComponent {
  isAddingTask = false;
  //taskService = new TasksService();

   constructor(private taskService:TasksService){
   }

  @Input() name = '';
  @Input() userId = "";

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddingTask(){
    this.isAddingTask = true;
  }

  closeAddTaskForm(){
    this.isAddingTask = false;
  }

}
