import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp',
  standalone: true,
  imports: [],
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {
   /*@Input({required:true}) id!:number;
   @Input({required:true}) name!:string;
   @Input() salary?:number;
   */
  //@Input({required:true})emp!:{id:number,name:string,salary:number};
  @Input({required:true}) emp!:Employee;

  @Output() increment = new EventEmitter<Employee>();

  name:string ='jack';


  incrementSalary(){
    console.log("incrementSalary called...")
    //this.emp.salary = this.emp.salary + 500;
    this.increment.emit(this.emp);
  }
}
