import { Component } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [PersonComponent, NgFor],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
   people = [
   {name:'Jack', age:20, nationality:'US'},
   {name:'Sam', age:23, nationality:'Russia'},
   {name:'Ajay',  age:0, nationality:'Indian'},
   {name:'Jessica', age:22, nationality:'' },
   {name:'ajit', age:0, nationality:'' }
   ];
}
