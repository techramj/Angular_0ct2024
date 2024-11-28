import { Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent  {
    userId = input.required<string>();
    userName= computed(() => this.userService.users.find(u => u.id === this.userId())?.name ||'');
    private userService = inject(UsersService);

     
}


//aproach 1: using subcription 
/*

import { Component, DestroyRef, OnDestroy, OnInit, inject, input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent implements OnInit, OnDestroy {
    //userId = input.required<string>();
    userId = signal('');
    userName= '';
    private route = inject(ActivatedRoute);
    private userService = inject(UsersService);
    private subscription!: Subscription;
    private destroyRef = inject(DestroyRef);

    constructor(){
      console.log("constructor called.....")
    }

    ngOnInit(): void {
 
     this.subscription = this.route.paramMap.subscribe({
       next:(paramMap) =>{
        this.userId.set(paramMap.get('userId') || '');
        this.userName = this.userService.users.find((u) => u.id === paramMap.get('userId'))?.name || '';
       }
     });

     this.destroyRef.onDestroy(()=> this.subscription.unsubscribe());
     //either use destroyRef or destroy method
    }

    ngOnDestroy(): void {
      console.log('destroy called....');
      //this.subscription.unsubscribe();
    }
}


*/
