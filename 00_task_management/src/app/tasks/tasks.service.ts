import { Injectable } from "@angular/core";
import { NewTask } from "../model/new-task.model";
import { type Task } from "../model/task.model";

@Injectable({
    providedIn:'root'
})
export class TasksService{
    private tasks:Task[] = [
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

      constructor(){
        const t = localStorage.getItem("tasks");
        if(t){
          this.tasks = JSON.parse(t);
        }
      }

    getAllTasks(){
        return this.tasks;
    }

    getUserTasks(userId:string){
        return this.tasks.filter(t => t.userId === userId);
    }

    addTask(newTask:NewTask, userId:string){
        this.tasks.unshift({id:new Date().getTime().toString(), ...newTask,userId});
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    removeTasks(id:string){
        console.log('removing the task , taskid=', id);
        this.tasks = this.tasks.filter(t => t.id != id);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}