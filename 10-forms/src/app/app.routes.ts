import { Routes } from '@angular/router';
import { Example1Component } from './forms/example1/example1.component';
import { Example2Component } from './forms/example2/example2.component';
import { Example3Component } from './forms/example3/example3.component';
import { Example4Component } from './forms/example4/example4.component';

export const routes: Routes = [
    {path:'form1', component: Example1Component},
    {path:'form2', component: Example2Component},
    {path:'form3', component: Example3Component},
    {path:'form4', component: Example4Component},

];
