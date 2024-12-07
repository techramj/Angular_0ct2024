import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private url = "http://localhost:3000/employees";

  headerOption = {
    headers:new HttpHeaders({
        'content-type':'application/json'
    })
  }

  
  getEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.url);
  }

  deleteEmployee(id: number | string){
    return this.httpClient.delete(this.url+"/"+id);
  }

  addEmployee(emp:any){
    return this.httpClient.post(this.url, JSON.stringify(emp), this.headerOption);
  }

  updateEmployee(id:any, emp:any){
    return this.httpClient.put(this.url+"/"+id, JSON.stringify(emp), this.headerOption);
  }

  getEmployeeById(id:any){
    return this.httpClient.get(this.url+"/"+id);
  }

}
