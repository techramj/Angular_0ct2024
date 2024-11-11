import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularBasicComponent } from './basic/angular-basic/angular-basic.component';
import { TemperatureComponent } from "./basic/temperature/temperature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularBasicComponent, TemperatureComponent, TemperatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'abc';
}
