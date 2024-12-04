import { Component, ViewChild, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-example4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './example4.component.html',
  styleUrl: './example4.component.css'
})
export class Example4Component {
  formData = viewChild.required<NgForm>('form1');
  onSubmit(){
    if(this.formData().form.invalid){
      return;
    }
    console.log(this.formData());
    console.log('email: ',this.formData().form.value.email);
    console.log('password:', this.formData().form.value.password);
  }
}
