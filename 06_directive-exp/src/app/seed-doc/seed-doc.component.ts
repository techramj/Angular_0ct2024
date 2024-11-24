import { Component } from '@angular/core';
import { SafeLinkDirective } from '../safe-link.directive';
import { AuthDirective } from '../auth/auth.directive';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-seed-doc',
  standalone: true,
  imports: [SafeLinkDirective, AuthDirective],
  templateUrl: './seed-doc.component.html',
  styleUrl: './seed-doc.component.css',
  hostDirectives :[LogDirective]
})
export class SeedDocComponent {

}
