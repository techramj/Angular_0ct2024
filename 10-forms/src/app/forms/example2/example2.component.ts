import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.css'
})
export class Example2Component {
  onSubmit(formData:NgForm){

    /*if(!formData.form.value.email || !formData.form.value.password){
      return;
    }*/

    if(formData.form.invalid){
      return;
    }
    console.log(formData);
    console.log('email: ',formData.form.value.email);
    console.log('password:', formData.form.value.password);
    //formData.form.reset();
  }

  foo(formData : NgForm){
    console.log(formData);
  }
}
