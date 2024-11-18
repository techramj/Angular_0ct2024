import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
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
