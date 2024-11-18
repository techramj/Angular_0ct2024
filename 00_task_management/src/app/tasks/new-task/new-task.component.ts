import { Component, EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  //@Output() newTask = new EventEmitter<NewTask>();
  constructor(private tasksService: TasksService){}

  title = '';
  summary = '';
  dueDate = '';

  onCancel(){
    console.log('cancel clickd..');
    this.close.emit();
  }

  onAddTask(){
    /*let title = this.title;
    let summary = this.summary;
    let dueDate = this.dueDate;
    this.newTask.emit({title,summary,dueDate});
    */
   this.tasksService.addTask(
    {title:this.title, 
      summary:this.summary, 
      dueDate:this.dueDate}, 
      this.userId);
      this.close.emit();
  }

}
