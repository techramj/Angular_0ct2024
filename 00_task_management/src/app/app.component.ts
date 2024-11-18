import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy_user';
import { type User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //users i am fetching from dummy file, fetch it from the local stortage or db

  users = DUMMY_USERS;
  selectedName:string ='';
  selectedUserId?:string;

  onSelectUser(user:User){
    console.log(user);
    this.selectedName = user.name;
    this.selectedUserId = user.id;
  }
}
