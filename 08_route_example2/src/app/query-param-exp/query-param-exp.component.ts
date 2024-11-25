import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-param-exp',
  standalone: true,
  imports: [],
  templateUrl: './query-param-exp.component.html',
  styleUrl: './query-param-exp.component.css'
})
export class QueryParamExpComponent implements OnInit {

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }

}
