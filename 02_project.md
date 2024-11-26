# create a project
ng new 00_task_management

## step to add bootstrap
```
step 1:run the below command
npm install --save bootstrap

step 2 : add the path of css and js file in angular.json as below

           "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```


# create component
```
        app-component 
          loop
            <app-user [user]=user>

    header    user    tasks taskService
                      list of tasks
                      --taskService = new TaskService(); use inject or constructor for injection

                       task                             new-tasks
                       button>complete<button>          Add task button
                       taskSrvice = new  TaskServide();                                 title
                                                        summary
                                                        dueDate


```

```
ng g c header --skip-tests
ng g c user --skip-tests
ng g c tasks --skip-tests
ng g c tasks/task --skip-tests
```

# step to convert standalone project to module based project
## create the root module file app.module.ts
```
@NgModule({
    declarations:[],  //add or register the component that will be used in this module
    bootstrap:  [AppComponent], //mention the root component. bootstrap is used only in main module
    imports: [..] //imports the standalone component and another module
})
export class AppModule{


}
```

## convert all the standalone component to standalone as false or remove the properties.
if you remove the standalone then imports property need to be removed.
All the component mentioned in import should be registered in the module.

## sub module.
same step as abvoe. but don't use bootstrap property.





# to create module based angualar project
## ng g c <project-name> --standalone false


# decorator
1. component -> @Component
2. service -> @Injectable
3. module -> @NgModule





# directive

```
<input name="user" [(ngModel)]="username">

component: template + component class

```

## two type of directive
### Attribute directive
<p [class]="{active:true}">

### structural directive
```
<p *ngIf="somecondition"></p>
*ngFor
```


## directive example 
```
ng g c auth --skip-tests
ng g c seed-doc --skip-tests
ng g s auth/auth --skip-tests

file for declaring the type

```
## custom structural directive
```
ng g d auth/auth --skip-tests


```





# Routing
## step to enable the routing
1. main.ts file
```
bootstrapApplication(AppComponent,{
  providers :[
    provideRouter([
      {path:'comp3', component: Comp3Component}
    ])
  ]
}).catch((err) => console.error(err));
```

OR
1.  app.routes.ts
```
export const routes: Routes = [
    {path:'comp3', component: Comp3Component}
];
```

2.  main.ts
```
bootstrapApplication(AppComponent,{
  providers :[
    provideRouter(routes)
  ]
}).catch((err) => console.error(err));

```

or

localhost:4200/query-exp?a=angular&b=bootstrap&c=css&d=dom&e=eval