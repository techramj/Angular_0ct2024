import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task';
import { type NewTask } from '../../new-task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
 
  @Output() cancelButton = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<NewTask>();

  title = '';
  summary = '';
  dueDate = '';

  onCancel(){
    console.log('cancel clickd..');
    this.cancelButton.emit();
  }

  onAddTask(){
    /*let title = this.title;
    let summary = this.summary;
    let dueDate = this.dueDate;
    this.newTask.emit({title,summary,dueDate});
    */
   this.newTask.emit({
    title:this.title,
    summary:this.summary,
    dueDate:this.dueDate
   });
  }

}
