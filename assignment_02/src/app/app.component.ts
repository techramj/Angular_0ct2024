import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonBannerComponent } from './button-banner/button-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ButtonBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment_02';
}
