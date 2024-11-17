import { Component, Input } from '@angular/core';
import { type Task } from '../task';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from '../new-task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  isAddingTask = false;
  tasks:Task[] = [
    {
      id:'t1',
      userId:'u01',
      title: 'Angular',
      dueDate: '2024-11-15',
      summary:'How to comunicate b/w two component?'
    },
    {
      id:'t2',
      userId:'u01',
      title: 'Angular',
      dueDate: '2024-11-15',
      summary:'explain service injection?'
    },
    {
      id:'t3',
      userId:'u02',
      title: 'Core Java',
      dueDate: '2024-11-15',
      summary:'Explain OOPS'
    },
    {
      id:'t4',
      userId:'u02',
      title: 'Programming',
      dueDate: '2024-12-15',
      summary:'WAP to print three number whose product is maximum?'
    },
    {
      id:'t5',
      userId:'u04',
      title: 'Programming',
      dueDate: '2024-11-18',
      summary:'Sort the array which contain only three number, 0,1,2?'
    },
    {
      id:'t6',
      userId:'u04',
      title: 'Angular',
      dueDate: '2024-11-15',
      summary:'Explain @Input()?'
    },
    {
      id:'t7',
      userId:'u04',
      title: 'Angular',
      dueDate: '2024-11-15',
      summary:'How to comunicate b/w two component?'
    },
    {
      id:'t8',
      userId:'u01',
      title: 'Angular',
      dueDate: '2024-11-15',
      summary:'How to comunicate b/w two component?'
    },
  ];

  @Input() name = '';
  @Input() userId = "";

  get selectedUserTasks(){
    return this.tasks.filter(t => t.userId === this.userId);
  }

  completeTask(task:Task){
    this.tasks = this.tasks.filter(t => t.id != task.id);
  }

  onStartAddingTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(newTask: NewTask){
    console.log(newTask);
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId : this.userId,
      title: newTask.title,
      summary:newTask.summary,
      dueDate:newTask.dueDate
    });
    this.isAddingTask = false;
  }

 

}
