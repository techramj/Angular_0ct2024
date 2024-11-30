import { Routes } from "@angular/router";
//import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent, canLeaveEditPage } from "../tasks/new-task/new-task.component";

import { TasksComponent, resolveUserTasks } from "../tasks/tasks.component";
import { TasksService } from "../tasks/tasks.service";
//import { resolveUserTasks } from "../tasks/tasks.component";


export const userRoutes: Routes = [
    {
        path: '',
        providers: [TasksService],  //lazy loading of the service
        children: [
            { path: '', redirectTo: 'tasks', pathMatch: "full" },
            {
                path: 'tasks',
                component: TasksComponent,
                resolve: {
                    userTasks: resolveUserTasks
                }
            }, 
            {
                path: 'tasks/new',
                component: NewTaskComponent,
                canDeactivate: [canLeaveEditPage],
            }
        ]
    }
];





/*import { ResolveFn, Routes } from "@angular/router";
//import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent, canLeaveEditPage } from "../tasks/new-task/new-task.component";
import { inject } from "@angular/core";
import { TasksService } from "../tasks/tasks.service";
import { Task } from "../tasks/task.model";
//import { resolveUserTasks } from "../tasks/tasks.component";

export const resolveUserTasks: ResolveFn<Task[]> = (route, router) =>{
    const order = route.queryParams['order'];
    const taskService = inject(TasksService);
    const userId = route.paramMap.get('userId');
 
    console.log(order, userId);
    const tasks =  taskService.allTasks()
    .filter(task => task.userId=== userId)
    .sort((a,b) => {
      if(order==='desc'){
        return a.dueDate > b.dueDate ? -1 : 1;
      }else{
        return a.dueDate > b.dueDate ? 1 : -1;
      }
    });
 
    return tasks.length ? tasks: [];
 };
 

export const userRoutes: Routes = [
    {path:'', redirectTo:'tasks', pathMatch:"full"},
    {path:'tasks', 
     //component:TasksComponent
     loadComponent:() => import('../tasks/tasks.component').then(mod => mod.TasksComponent),
     resolve: {
        userTasks : resolveUserTasks
     }
    },  // <domain>/users/u01/tasks
    {path:'tasks/new', 
     //component: NewTaskComponent,
     loadComponent: () => import('../tasks/new-task/new-task.component').then(mod => mod.NewTaskComponent),
     canDeactivate:[canLeaveEditPage],

     }
];

*/