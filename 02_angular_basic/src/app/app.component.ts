import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularBasicComponent } from './basic/angular-basic/angular-basic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02_angular_basic';
}
