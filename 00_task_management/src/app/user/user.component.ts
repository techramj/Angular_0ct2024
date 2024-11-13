import { Component, Input } from '@angular/core';
import { type User } from '../user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   @Input({required:true}) user!:User;

  //imagePath:string = "/users/user_01.jpeg";

  get imagePath(){
    return "/users/"+this.user.avatar;
  }
}
