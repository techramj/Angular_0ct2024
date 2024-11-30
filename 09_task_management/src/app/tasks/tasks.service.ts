import { Injectable, signal } from '@angular/core';
import { type NewTask } from './new-task.model';

@Injectable()
export class TasksService {
  private tasks = signal( [
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
      dueDate: '2024-11-11',
      summary:'explain service injection?'
    },
    {
      id:'t3',
      userId:'u02',
      title: 'Core Java',
      dueDate: '2024-11-09',
      summary:'Explain OOPS'
    },
    {
      id:'t4',
      userId:'u02',
      title: 'Programming',
      dueDate: '2024-12-23',
      summary:'WAP to print three number whose product is maximum?'
    },
    {
      id:'t5',
      userId:'u04',
      title: 'Programming',
      dueDate: '2024-11-29',
      summary:'Sort the array which contain only three number, 0,1,2?'
    },
    {
      id:'t6',
      userId:'u04',
      title: 'Angular',
      dueDate: '2024-11-01',
      summary:'Explain @Input()?'
    },
    {
      id:'t7',
      userId:'u04',
      title: 'Angular',
      dueDate: '2024-11-03',
      summary:'How to comunicate b/w two component?'
    },
    {
      id:'t8',
      userId:'u01',
      title: 'Angular',
      dueDate: '2024-11-05',
      summary:'How to comunicate b/w two component?'
    },
  ]);

  allTasks = this.tasks.asReadonly();

  constructor(){
    const t = localStorage.getItem("tasks");
    if(t){
      this.tasks = JSON.parse(t);
    }
  }

addTask(newTask:NewTask, userId:string){
   console.log(newTask, userId);
   /* this.tasks.set([
      {
        id:new Date().getTime().toString(),
        userId:userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      }
    ]);*/
    /*this.tasks.update((prevTasks)=>[
      {
        id:new Date().getTime().toString(),
        userId:userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      }, 
      ...prevTasks
    ]);*/
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
}

removeTasks(id:string){
    this.tasks.update((prevTasks) => prevTasks.filter(t => t.id !== id));
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

}
 
}
