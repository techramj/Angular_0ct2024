import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-angular-basic',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './angular-basic.component.html',
  styleUrl: './angular-basic.component.css'
})
export class AngularBasicComponent {
  title = "Angular Basic";
  colors = ['RED', 'GREEN','Magenta', 'BLUE','JACK'];
  day = 6;
  day1= 7;
  min = 1;
  max:number = 8;
  show = true;
  hide:boolean = false;
  


  employee ={
    id:100,
    name:'Ram Jaiswal',
    salary:'9876556789.456787777',
    variable:0.25,
    gender:1,
    doj:new Date(),
    mobile: '9922334455',
    pan:'abcd01915m',
    isMarried:true,
    city:'pune'
  }

  showHide(){
    this.hide = !this.hide;
  }

  time = new Observable<String>((s:Subscriber<string>)=>{
    setInterval(()=>{
      s.next(new Date().toLocaleString());
    },1000);
  })



}
