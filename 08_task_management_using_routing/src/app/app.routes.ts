import { Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GreetComponent } from './greet/greet.component';
import { QueryParamExpComponent } from './query-param-exp/query-param-exp.component';

export const routes: Routes = [
    {path:"one", component:Comp1Component},
    {path:"two", component:Comp2Component},
    {path:"three", component:Comp3Component},
    {path:"four", component:Comp4Component},
    {path:'greet/:name', component:GreetComponent},
    {path:'query-exp', component: QueryParamExpComponent},
    {path:'',redirectTo:'one', pathMatch:'full'},
    {path:'**', component:PageNotFoundComponent}
];
