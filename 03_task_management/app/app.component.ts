import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy_user';
import { type User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
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
