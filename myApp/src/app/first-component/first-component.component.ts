import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  // template:`<h1>hello world</h1>`,
  styleUrls: ['./first-component.component.css'],
  // styles:['p{color:red}']
})
export class FirstComponentComponent {
  name = 'user';
  isdisable = true;
  ngOnInit() {
    var observable = Observable.create((observer: any) => {
      observer.next("hello world 1")
      observer.next("hello world 2")
      setTimeout(function () {
        observer.next("hello world 3")
      }, 1000)
      observer.next("hello world 4")
      observer.error("hello world 5")
      observer.complete()
    })

    observable.subscribe(function logmsg(msg: any) {
      console.log(msg);
    })

  }



}
