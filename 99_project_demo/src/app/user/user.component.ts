import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required:true}) id!:string;
  @Input({required:true}) name!:string;
  @Input({required:true}) avatar!:string;

  @Output() selectUser = new EventEmitter();

  get imagePath(){
    return  'users/'+this.avatar;
  }


  onSelectUser(){
    console.log(this.id+" user selected");
    this.selectUser.emit();
  }
}
