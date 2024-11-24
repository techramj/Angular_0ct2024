import { Directive, ElementRef, Input, inject } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone : true,
    host: {
        '(click)' : 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective{

    @Input({alias:'appSafeLink'}) pathParam!:string;
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

    constructor(){
        console.log("SafeLinkDirective");
    }

    onConfirmLeavePage(event: MouseEvent){
    console.log('link clicked',this.pathParam);
       const ans =  window.confirm("Do you want to leave the page ?");
       if(ans){
         console.log('moved to next page= >', ans);
         const prevLink = this.hostElementRef.nativeElement.href;
         this.hostElementRef.nativeElement.href = prevLink +this.pathParam;
         return;
       }
       event.preventDefault();
    }
}
//https://github.com/techramj/"
//https://github.com/techramj/Angular_0ct2024
//https://github.com/techramj/Angular_0ct2024/tree/main/lificycle