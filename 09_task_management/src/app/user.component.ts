import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from '../model/user.model';

@Component({
  selector: 'app-user',
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