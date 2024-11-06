# Selector
1. three type of selector
a. element selector
b. attribute selector
c. class selector

## element selector
```
@Component({
  selector: 'app-comp-a', 
  standalone: true,
  imports: [],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})

<app-comp-a></app-comp-a>
```

## attribute selector
```
@Component({
  selector: '[app-comp-b]',
  standalone: true,
  imports: [],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
<p app-comp-b></p>
```

## class selector
```
@Component({
  selector: '.app-comp-c',
  standalone: true,
  imports: [],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})

<p class="app-comp-c" ></p>
```


# conditonal if else
## @for
## using directive ngIf


# iteration
## @for(item of items; track #trackingProperty){}
## <p *ngFor="let item of items"></p>


# Assignment
```
create two component
employees, emp

In the employees add properties 
employees = [{id,name,salary}, .....]


in emp component
display the details of emp

from employees component call the emp component and display the details of all the employees




```