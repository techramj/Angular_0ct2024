import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
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

  name = 'Robert';
  userId = "u01";

  get selectedUserTasks(){
    return this.tasks.filter(t => t.userId === this.userId);
  }




}
