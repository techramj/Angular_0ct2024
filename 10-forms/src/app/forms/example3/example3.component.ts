import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example3.component.html',
  styleUrl: './example3.component.css'
})
export class Example3Component {

  onSubmit(formData:NgForm){
    if(formData.form.invalid){
      return;
    }
    console.log(formData);
    console.log('email: ',formData.form.value.email);
    console.log('password:', formData.form.value.password);
  }

}
