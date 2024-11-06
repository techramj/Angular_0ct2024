import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERs } from './dummy_user';

const randomIdx =  Math.floor(Math.random()*DUMMY_USERs.length);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERs;
  selectedUser = DUMMY_USERs[randomIdx];

  onUserClick(){
    console.log('onUserClick....')
    const idx =  Math.floor(Math.random()*DUMMY_USERs.length);
    this.selectedUser = DUMMY_USERs[randomIdx];
  }
}
