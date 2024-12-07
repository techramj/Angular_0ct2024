import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject } from '@angular/core';
import { Employee } from '../shared/model/employee.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-http-exp',
  standalone: true,
  imports: [],
  templateUrl: './http-exp.component.html',
  styleUrl: './http-exp.component.css'
})
export class HttpExpComponent {
  url = "http://localhost:3000/employees";
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit(){
    console.log('init called...');
    this.method1();
    this.method2();
    this.method3();
    this.method4();
    this.method5();
    this.method6();
    this.method7();
  }

  method1(){
    const subscription = this.httpClient.get(this.url)
    .subscribe({
      next: (respData)=>{
        console.log('method1 ',respData);
      }
    });

    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  method2(){
    const subscription= this.httpClient.get<Employee[]>(this.url)
    .subscribe({
      next: (respData:Employee[])=>{
        console.log('method2 ',respData);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  method3(){
    const subscription= this.httpClient.get<{employees:Employee[]}>(this.url)
    .subscribe({
      next: (respData)=>{
        console.log('method3 ',respData.employees);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  method4(){
    const subscription= this.httpClient.get<Employee[]>(this.url,{
      observe:'response'
    })
    .subscribe({
      next: (resp)=>{
        console.log('method4 ',resp,resp.body);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  method5(){
    const subscription= this.httpClient.get<Employee[]>(this.url,{
      observe:'events'
    })
    .subscribe({
      next: (resp)=>{
        console.log('method5 ',resp);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  //return constant value in the response
  method6(){
    const subscription= this.httpClient
    .get<Employee[]>(this.url)
    .pipe(
      map((emps) => {return "success";})
    )
    .subscribe({
      next: (respData)=>{
        console.log('method6 ',respData);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }

  //return list of name
  method7(){
    const subscription= this.httpClient
    .get<Employee[]>(this.url)
    .pipe(
      map((emps) => emps.map(e => e.name))
    )
    .subscribe({
      next: (respData)=>{
        console.log('method7 ',respData);
      }
    });
    this.destroyRef.onDestroy(()=> subscription.unsubscribe());
  }
}
