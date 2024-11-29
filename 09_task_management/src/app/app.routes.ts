import { Routes } from '@angular/router';   
import { NoTaskComponent } from './no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserTasksComponent, resolveUserName } from './users/user-tasks/user-tasks.component';
import { userRoutes } from './users/users.routes';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'', component: NoTaskComponent},
    {path: 'users/:userId', 
     component: UserTasksComponent,
     children : userRoutes,
     data:{
        message : 'Hello!'
     },
     resolve :{
        userName: resolveUserName
     }
    },
    {path:'tasks' , component: TasksComponent},
    {path:'**', component:NotFoundComponent}
];

//localhost:4200/users/u01