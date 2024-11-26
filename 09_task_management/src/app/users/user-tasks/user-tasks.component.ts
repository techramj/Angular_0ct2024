import { Component, OnInit, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css'
})
export class UserTasksComponent implements OnInit {
    userId = input.required<string>();
    //private route = inject(ActivatedRoute);

    ngOnInit(): void {
      //this.userId = this.route.snapshot.paramMap.get('userId') || '';
      console.log('userid= ',this.userId())
    }
}
