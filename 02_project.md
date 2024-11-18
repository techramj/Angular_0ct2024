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

# step to convert module
## create the root module file app.module.ts