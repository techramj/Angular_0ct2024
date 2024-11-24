import { Directive, Input, effect, input, inject, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  //@Input() userType!: Permissions;
  userType = input.required<Permission>({alias:'appAuth'});
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);


  constructor() {
    effect(()=>{
      if(this.authService.activePermission() === this.userType()){
        console.log('IF section');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else{
        console.log('else section');
        this.viewContainerRef.clear();
      }
    });
   }

}
