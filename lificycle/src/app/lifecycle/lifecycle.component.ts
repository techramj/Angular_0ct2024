import { AfterContentInit, Component, DoCheck, Input, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, DoCheck,AfterContentInit, OnDestroy {
  @Input() text!:string;
  @Input() size!: number;
  applyCss = true;

  constructor(){
    console.log('[LifecycleComponent][constructor] called');
    console.log('[LifecycleComponent][constructor]','Text ='+this.text);
  }

  ngOnChanges(change: SimpleChange){
    console.log('[LifecycleComponent][ngOnChanges] called');
    console.log('[LifecycleComponent][ngOnChanges]','Text ='+this.text);
    console.log(this.size);
    //console.log(change);
    //console.log('[LifecycleComponent][ngOnChanges]',change,change.currentValue, change.previousValue);
  }

  ngOnInit(){
    console.log('[LifecycleComponent][ngOnInit] called');
    console.log('[LifecycleComponent][ngOnInit]','Text ='+this.text);
  }

  ngDoCheck(): void {
    console.log('[LifecycleComponent][ngDoCheck] called');
  }

  ngAfterContentInit(){
    console.log('[LifecycleComponent][ngAfterContentInit] called');
  }

  ngAfterViewInit(){
    console.log('[LifecycleComponent][ngAfterViewInit] called');
  }

  ngOnDestroy(): void {
    console.log('[LifecycleComponent][ngOnDestroy] called');
  }


}
