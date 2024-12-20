import { Component } from '@angular/core';
import { EmpComponent } from '../emp/emp.component';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [EmpComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employees:{id:number,name:string,salary:number}[] =[
    {id:1, name:'jack', salary:2000},
    {id:2, name:'jackie', salary:21000},
    {id:3, name:'jackson', salary:12000},
    {id:4, name:'jessica', salary:22000},
    {id:5, name:'john', salary:23000},
  ]

  incrementSalary(emp:Employee){
    console.log(emp);
    this.employees = this.employees.map(e=>{
      if(e.id === emp.id){
        return {...e, salary: emp.salary+ 500};
      }
      return e;
    });
  }

  showDetails(){
    console.log(this.employees);
  }



  
}
