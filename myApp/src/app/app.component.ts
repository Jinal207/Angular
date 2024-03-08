import { Component } from '@angular/core';
import { MyClass } from './my-class';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
// const template = '<div>hello</div>';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:template,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'myApp';

  // employee: MyClass[] = [
  //   new MyClass(1, "abc"),
  //   new MyClass(2, "pqr")
  // ]

  alert = FirstComponentComponent;

  // switchAlert() {
  //   if (this.alert == FirstComponentComponent) {
  //     this.alert = SecondComponentComponent;
  //   }
  // }

  // first=FirstComponentComponent;
  // second=SecondComponentComponent;

  //custom pipe

}
