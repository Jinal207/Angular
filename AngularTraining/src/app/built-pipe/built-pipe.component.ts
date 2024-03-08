import { Component } from '@angular/core';

@Component({
  selector: 'app-built-pipe',
  templateUrl: './built-pipe.component.html',
  styleUrls: ['./built-pipe.component.css']
})
export class BuiltPipeComponent {
  inp1: string = "this is pipe uppercase example";
  inp2: string = "This Is Pipe Lowecase Example";
  inp3: any[] = [{ msg1: "this is json pipe example 1" }, { msg2: "this is json pipe example 2" }];
  inp4: number = 100;
  inp5: Date = new Date();
  inp6: number = 1.234567890123456
  inp7: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
}
