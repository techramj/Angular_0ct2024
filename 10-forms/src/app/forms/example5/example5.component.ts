import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-example5',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './example5.component.html',
  styleUrl: './example5.component.css'
})
export class Example5Component {
  form = new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  });

}
