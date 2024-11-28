import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const userRoutes: Routes = [
    {path:'', redirectTo:'tasks', pathMatch:"full"},
        {path:'tasks', component:TasksComponent},  // <domain>/users/u01/tasks
        {path:'tasks/new', component: NewTaskComponent}
];