import { Injectable } from '@angular/core';
import { DUMMY_USERS } from '../dummy_user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   get users(){
     return DUMMY_USERS;
   }
}
