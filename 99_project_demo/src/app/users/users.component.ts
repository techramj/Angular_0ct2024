import { Component } from '@angular/core';
import { DUMMY_USERs } from '../dummy_user';
import { UserComponent } from '../user/user.component';

type User = {id:string, name:string, avatar:string};
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //users!:{id:string, name:string, avatar:string}[];
   users:User[] = DUMMY_USERs
}
