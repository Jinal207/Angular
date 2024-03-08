import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-childview',
  templateUrl: './childview.component.html',
  styleUrls: ['./childview.component.css']
})
export class ChildviewComponent implements AfterViewInit {

  // first method
  @ViewChild('username') input: any;
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit() {
    // ElementRef: { nativeElement: <input> }
    console.log(this.input);
    // Access the input object or DOM node
    console.dir(this.input.nativeElement);
    // Manipulate via Renderer2
    this.renderer.setStyle(this.input.nativeElement, 'background', '#d515a0');
  }

  //second method

  // @ViewChild('title')
  // title:ElementRef | any
  // @ViewChild('username')
  // username:ElementRef|any

  //   ngAfterViewInit() {
  //   console.log('Values on ngAfterViewInit():');
  //   console.log("title:", this.title.nativeElement);
  //   console.log("username:", this.username.nativeElement);
  // }

}


