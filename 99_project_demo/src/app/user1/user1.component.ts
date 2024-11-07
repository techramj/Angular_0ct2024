import { Component } from '@angular/core';
import { DUMMY_USERs } from '../dummy_user';

const randomIdx = Math.floor(Math.random()*DUMMY_USERs.length);
@Component({
  selector: 'app-user1',
  standalone: true,
  imports: [],
  templateUrl: './user1.component.html',
  styleUrl: './user1.component.css'
})
export class User1Component {

  selectedUser = DUMMY_USERs[randomIdx];
  get imagePath(){
    return  'users/'+this.selectedUser.avatar;
  }


  onSelectUser(){
    console.log("before user change the value",this.selectedUser);
    const idx = Math.floor(Math.random()*DUMMY_USERs.length);
    this.selectedUser = DUMMY_USERs[idx];
    console.log("After button click",this.selectedUser);
  }
}
