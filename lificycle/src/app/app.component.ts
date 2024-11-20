import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LifecycleComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lificycle';
  visibleFlag = false;
  inputText = "Some Random number: "+ Math.random() *100;
  msg:number = 10;

  constructor(){
    console.log('[AppComponent]Constructor called');
  }

  onToggleVisibility(){
    this.visibleFlag = !this.visibleFlag;
  }

  onChangeInputText(){
    this.inputText = "another Random number: "+ Math.random() *100;
  }

}
