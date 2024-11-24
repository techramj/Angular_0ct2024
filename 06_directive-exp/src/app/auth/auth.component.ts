import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives :[LogDirective]
})
export class AuthComponent {

  email = signal("");
  password = signal("");

  authService = inject(AuthService);

  a!: 'a'  | 'b' | 'c';

  onSubmit(){
    //console.log(this.email());
    this.authService.authenticate(this.email(), this.password());
  }

}
