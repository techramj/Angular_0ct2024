import { Component, Input } from '@angular/core';
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
}
