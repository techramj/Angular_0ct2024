import { Routes } from '@angular/router';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpEditComponent } from './emp-edit/emp-edit.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpExpComponent } from './http-exp/http-exp.component';

export const routes: Routes = [
    {path:"employees", component:EmpListComponent},
    {path:"employees/:id/edit", component:EmpEditComponent},
    {path:"employees/new", component:EmpAddComponent},
    {path: "emp-exp", component: HttpExpComponent},
    {path: '', redirectTo: "emp-exp", pathMatch:'full'},
    {path:'**', component: PageNotFoundComponent}
];
