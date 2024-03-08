import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})

  export class SecondComponentComponent {
  num: number = 7;
  arr = [1, 2, 3, 4, 5, 6];
  color: string = 'red';
  value: string = 'this is pipe example';

  // event binding
  onSave($event: any) {
    // console.log("button clicked",$event)
    alert('button clicked');
  }

}
