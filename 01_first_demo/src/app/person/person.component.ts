import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [NgIf],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
    @Input({required:true}) name!:string;
    @Input() age?:number;
    @Input() nationality:string | undefined;
}
