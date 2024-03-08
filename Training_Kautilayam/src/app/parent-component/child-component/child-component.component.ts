import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent {

  @Input() childMsg = "";

  count: number = 0;
  @Output() countFunc: EventEmitter<number> = new EventEmitter();

  increment() {
    this.count++;
    this.countFunc.emit(this.count);
  }

  updatedNumber!: number;

  @Input() set randNumber(data: number) {
    this.updatedNumber = this.addNumber(data)
  }

  addNumber(data: any) {
    return data + 10
  }

}
