import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERs } from './dummy_user';
import { User1Component } from "./user1/user1.component";
import { User2Component } from "./user2/user2.component";
import { UsersComponent } from "./users/users.component";

const randomIdx =  Math.floor(Math.random()*DUMMY_USERs.length);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, User1Component, User2Component, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERs;
  selectedUser = DUMMY_USERs[randomIdx];

  onUserClick(){

    const idx =  Math.floor(Math.random()*DUMMY_USERs.length);
    this.selectedUser = DUMMY_USERs[idx];
    console.log(idx, this.selectedUser);
  }
}
