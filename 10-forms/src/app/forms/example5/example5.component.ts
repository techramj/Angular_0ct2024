import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-example5',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './example5.component.html',
  styleUrl: './example5.component.css'
})
export class Example5Component {
  form1 = new FormGroup({
    email: new FormControl('a@test.com',{
      validators :[Validators.email, Validators.required]
    }),
    password:new FormControl('12',{
      validators: [Validators.required, Validators.minLength(3)]
    })
  });

  get emailIsInvalid(){
    return this.form1.controls.email.touched 
    && this.form1.controls.email.invalid;
  }

  get passwordsInvalid(){
    return this.form1.controls.password.touched 
    && this.form1.controls.password.invalid;
  }

  OnSubmit(){
    if(this.form1.invalid){
      return;
    }
    let enteredMail = this.form1.value.email;
    let password = this.form1.value.password;
    console.log(enteredMail, password);
  }

}
