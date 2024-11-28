import { Component, input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  userId = input.required<string>();
  constructor(private tasksService: TasksService){}

  title = '';
  summary = '';
  dueDate = '';

  onCancel(){
    console.log('cancel clickd..');
  
  }

  onAddTask(){
   
  }
}
