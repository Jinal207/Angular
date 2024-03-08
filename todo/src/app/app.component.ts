import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  data: number = 100

  constructor() {
    console.log(`this is app_constructor : ${this.data}`)
  }

  ngOnChanges(){
    console.log(`this is app_ngOnChanges : ${this.data}`)
  }

  ngOnInit(){
    console.log(`this is app_ngOnInit : ${this.data}`)
  }


  ngDoCheck(){
    console.log(`this is app_ngDoCheck : ${this.data}`)
  }


  ngAfterContentInit(){
    console.log(`this is app_ngAfterContentInit : ${this.data}`)
  }


  ngAfterContentChecked(){
    console.log(`this is app_ngAfterContentChecked : ${this.data}`)
  }


  ngAfterViewInit(){
    console.log(`this is app_ngAfterViewInit : ${this.data}`)
  }

  ngAfterViewChecked(){
    console.log(`this is app_ngAfterViewChecked : ${this.data}`)
  }


  ngOnDestroy(){
    console.log(`this is app_ngOnDestroy : ${this.data}`)
  }

addNumber(){
  this.data+=100
}

deleteNumber(){
  this.data-=100
}

}
