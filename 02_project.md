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


## step to enable routing in the project


## lazy loading
```
//app-component
//user-tasks
//users
//user
tasks
new-tasks
N//o-component 

```


# forms
1. Template-driven
2. Reactive

## template driven forms


empId
name
salary
email


# step to expose the employee rest API
1. create the folder 
```
mkdir 11_ems_db
cd 11_ems_db

```

2. execute the below command
```
npm init -y
```

3. create the json file
```
employees.json

```

4. add the few dummy employee data
```
{
  "employees" :[
    {"id":1, "name":"sam", "salary":5000, "email":"sam@seed.com"},
    {"id":1, "name":"samson", "salary":15000, "email":"samson@seed.com"},
    {"id":1, "name":"sammer", "salary":10000, "email":"sammer@seed.com"},
    {"id":1, "name":"Jessica", "salary":50000, "email":"jessica@seed.com"},
    {"id":1, "name":"John", "salary":55000, "email":"john@seed.com"},
    {"id":1, "name":"Ajay", "salary":15000, "email":"ajay@seed.com"}
  ]
}

```

5. install json-server
```
npm install -g json-server
```

6. execute the below command to run the server
```
npx json-server --watch employees.json
```

7. or set the above command with npm start
```
add the above command in package.json as below
"scripts": {
    "start": "npx json-server --watch employees.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
8. start the server
```
npm start

```

# step for java
1. create spring boot application using spring starter
2. select the required dependency
3. create employeeController to perform CRUD


## Rest API
1. get
```
fetch all employees details
    http://localhost:3000/employees

fetch employee details by id
   http://localhost:3000/employees/:id
   where :id  is path variable

```
2. post
```
adding the employees
POST: http://localhost:3000/employees
body:
{
  "name": "Amol",
  "salary": 10000,
  "email": "abhi@seed.com"
}

```
3. put
```
update employees
PUT: http://localhost:3000/employees/:id
boyd:
{
  "id" : "1"
  "name": "Amol",
  "salary": 10000,
  "email": "abhi@seed.com"
}

```
4. delete
```
DELETE: http://localhost:3000/employees/:id
```
