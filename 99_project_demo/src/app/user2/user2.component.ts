import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERs } from '../dummy_user';

const randomIdx = Math.floor(Math.random()*DUMMY_USERs.length);
@Component({
  selector: 'app-user2',
  standalone: true,
  imports: [],
  templateUrl: './user2.component.html',
  styleUrl: './user2.component.css'
})
export class User2Component {
  selectedUser = signal( DUMMY_USERs[randomIdx]);

  /*get imagePath(){
    return  'users/'+this.selectedUser.avatar;
  }*/
  imagePath = computed(()=>"/users/"+this.selectedUser().avatar);


  onSelectUser(){
    console.log("before user change the value",this.selectedUser);
    const idx = Math.floor(Math.random()*DUMMY_USERs.length);
    this.selectedUser.set(DUMMY_USERs[idx]);
    console.log("After button click",this.selectedUser);
    
  }
}
