import { Routes } from '@angular/router';
import { TaskComponent } from './tasks/task/task.component';
import { NoTaskComponent } from './no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
    {path:'', component: NoTaskComponent},
    {path: 'users/:userId', component: UserTasksComponent},
    {path:'tasks' , component: TasksComponent},
];

//localhost:4200/users/u01