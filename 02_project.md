# create a project
ng new 00_task_management


# create component
```
        app-component
          loop
            <app-user [user]=user>

    header    user    tasks
                      list of tasks

                       task                             new-tasks
                       button>complete<button>          Add task button
                                                        title
                                                        summary
                                                        dueDate


```

```
ng g c header --skip-tests
ng g c user --skip-tests
ng g c tasks --skip-tests
ng g c tasks/task --skip-tests
```