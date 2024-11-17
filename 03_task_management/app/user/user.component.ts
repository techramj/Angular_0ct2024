import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../user';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   @Input({required:true}) user!:User;
   @Output() select = new EventEmitter<User>();
   @Input() selected:boolean = false;

  //imagePath:string = "/users/user_01.jpeg";

  get imagePath(){
    return "/users/"+this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user);
  }
}
