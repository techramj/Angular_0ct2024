import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PersonComponent } from './person/person.component';
import { PeopleComponent } from "./people/people.component";
import { CompAComponent } from "./comp-a/comp-a.component";
import { CompBComponent } from "./comp-b/comp-b.component";
import { CompCComponent } from "./comp-c/comp-c.component";
import { AComponent } from './a/a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PersonComponent, 
    PeopleComponent, CompAComponent, CompBComponent, CompCComponent,
    AComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to the class of Angular';
}
