import { Component, inject, input, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  flag = false;

  /*constructor(private tasksService: TasksService, 
              private router:Router){}
              */

  title = signal('');
  summary = signal('');
  dueDate = signal('');

  onCancel(){
    console.log('cancel clickd..');
  
  }

  onAddTask(){
   this.tasksService.addTask(
    {title:this.title(), summary:this.summary(), dueDate: this.dueDate()}, 
    this.userId());
    this.flag = true;
    //navigate to /users/{userid}/tasks

    //this.router.navigate(["/users"+"/"+this.userId()+"/"+"tasks"]);
    this.router.navigate(["/users", this.userId(),"tasks"]);
  }
}

export const canLeaveEditPage : CanDeactivateFn<NewTaskComponent> = (comp) =>{
  console.log('leaving the page...');
  if(comp.flag){
    return true;
  }
  
  if(comp.title() || comp.summary() || comp.dueDate()){
    return window.confirm("You may lost the data. Still you want to leave?");
  }
  return true;
};
