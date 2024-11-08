import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-button-banner',
  standalone: true,
  imports: [ButtonComponent, BannerComponent],
  templateUrl: './button-banner.component.html',
  styleUrl: './button-banner.component.css'
})
export class ButtonBannerComponent {
   bbCount:number = 0;
}
