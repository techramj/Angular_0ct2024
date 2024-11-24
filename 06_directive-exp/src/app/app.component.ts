import { Component, computed } from '@angular/core';
import { SeedDocComponent } from "./seed-doc/seed-doc.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [ SeedDocComponent, AuthComponent, NgIf, AuthDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '06_directive-exp';

  constructor(private authService:AuthService){}

  isAdmin  = computed(() => this.authService.activePermission() === 'admin');
}
