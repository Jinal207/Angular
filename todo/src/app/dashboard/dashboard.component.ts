import { Component } from '@angular/core';
import { Task } from '../model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent {

  // to do.....
  public taskList: Task[] = [];

  addtask() {
    this.taskList.push(new Task());
  }

  removetask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
  }

  // component life cycle

  data: number = 100

  constructor() {
    console.log(`this is constructor : ${this.data}`)
  }

  ngOnChanges(){
    console.log(`this is ngOnChanges : ${this.data}`)
  }

  ngOnInit(){
    console.log(`this is ngOnInit : ${this.data}`)
  }


  ngDoCheck(){
    console.log(`this is ngDoCheck : ${this.data}`)
  }


  ngAfterContentInit(){
    console.log(`this is ngAfterContentInit : ${this.data}`)
  }


  ngAfterContentChecked(){
    console.log(`this is ngAfterContentChecked : ${this.data}`)
  }


  ngAfterViewInit(){
    console.log(`this is ngAfterViewInit : ${this.data}`)
  }

  ngAfterViewChecked(){
    console.log(`this is ngAfterViewChecked : ${this.data}`)
  }

  ngOnDestroy(){
    console.log(`this is ngOnDestroy : ${this.data}`)
  }

addNumber(){
  this.data+=100
}

deleteNumber(){
  this.data-=100
}

}
