import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.css'
})
export class Example1Component {

  onSubmit(formData:NgForm){
    console.log(formData);
    console.log('email: ',formData.form.value.email);
    console.log('password:', formData.form.value.password);
    //formData.form.reset();
  }

}
