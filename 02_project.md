# create a project
ng new 00_task_management


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


