import { Component, inject, input, signal } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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

    //navigate to /users/{userid}/tasks

    //this.router.navigate(["/users"+"/"+this.userId()+"/"+"tasks"]);
    this.router.navigate(["/users", this.userId(),"tasks"]);
  }
}
