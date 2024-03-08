import { Component } from '@angular/core';

@Component({
  selector: 'app-built-directive',
  templateUrl: './built-directive.component.html',
  styleUrls: ['./built-directive.component.css']
})
export class BuiltDirectiveComponent {
  num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  color:string="blue"
}
