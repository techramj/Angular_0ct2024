# create the component
```
ng g c header --skip-tests
ng g c users --skip-tests
ng g c users/user --skip-tests
ng g c tasks --skip-tests
ng g c tasks/task --skip-tests 
ng g c tasks/new-task --skip-tests
ng g c shared/card --skip-tests


```

# service
```
 ng g s tasks/tasks --skip-tests  
 ng g s users/users --skip-tests 
```


# nested routes
```
<url>/user/:userId/tasks/new

```

## Lazy loading
1. choose the component to be lazy laoding
2. avoid import for component which should be loaded as lazy loading
3. isntead of component user loadComponent propery
4. loadComponent required function () => import(path).then