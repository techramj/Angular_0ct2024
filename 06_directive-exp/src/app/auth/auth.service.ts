import { Injectable, signal } from '@angular/core';
import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 activePermission = signal<Permission>('guest');

 authenticate(email:string, password:string){
    if(email === 'admin@seed.com' && password === 'admin'){
      this.activePermission.set('admin');
    }else if(email === 'user@seed.com'){
      this.activePermission.set('user');
    }else{
      this.activePermission.set('guest');
    }
  }

  logout(){
    this.activePermission.set('guest');
  }

}
