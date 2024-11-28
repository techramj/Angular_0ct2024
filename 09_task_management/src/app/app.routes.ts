import { Routes } from '@angular/router';
import { NoTaskComponent } from './no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { userRoutes } from './users/users.routes';

export const routes: Routes = [
    {path:'', component: NoTaskComponent},
    {path: 'users/:userId', 
     component: UserTasksComponent,
     children : userRoutes
    },
    {path:'tasks' , component: TasksComponent},
];

//localhost:4200/users/u01