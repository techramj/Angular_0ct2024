import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Employee } from '../shared/model/employee.model';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { EmployeesService } from '../shared/services/employees.service';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {

  employees = signal<Employee[] | undefined>(undefined);
  isFetching = signal(false);
  errorMsg = signal('');

  url = "http://localhost:3000/employees";
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private empService = inject(EmployeesService);

  ngOnInit(){
    //this.approach1();

    this.isFetching.set(true);
    //this.approach2();

    //this.approach3();

    this.approach4();
  }

  approach4(){
      const subscription= this.empService.getEmployees()
      .subscribe({
        next: (respData:Employee[])=>{
          console.log('approach2 ',respData);
          this.employees.set(respData);
        },
        complete:()=>{
          this.isFetching.set(false);
        },
        error: (err) => {
          this.isFetching.set(false);
          console.log(err);
          this.errorMsg.set('Something went wrong. Please try after some time.');
        }
      });
      this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  approach3(){
    const subscription= this.httpClient.get<Employee[]>(this.url)
    .subscribe({
      next: (respData:Employee[])=>{
        console.log('approach2 ',respData);
        this.employees.set(respData);
      },
      complete:()=>{
        this.isFetching.set(false);
      },
      error: (err) => {
        this.isFetching.set(false);
        console.log(err);
        this.errorMsg.set('Something went wrong. Please try after some time.');
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  approach2(){
    const subscription= this.httpClient.get<Employee[]>(this.url)
    .subscribe({
      next: (respData:Employee[])=>{
        console.log('approach2 ',respData);
        this.employees.set(respData);
      },
      complete:()=>{
        this.isFetching.set(false);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  approach1(){
    const subscription= this.httpClient.get<Employee[]>(this.url)
    .subscribe({
      next: (respData:Employee[])=>{
        console.log('approach1 ',respData);
        this.employees.set(respData);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }


  deleteEmployee(id:any){
    this.empService.deleteEmployee(id)
    .subscribe(
      {
        next: ()=> {
            this.approach4();
        }
      }
    )
  }
}
