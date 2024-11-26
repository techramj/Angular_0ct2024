import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greet',
  standalone: true,
  imports: [],
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent implements OnInit {
  name:string | null = 'jack';

  constructor(private route:ActivatedRoute){
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }
}
