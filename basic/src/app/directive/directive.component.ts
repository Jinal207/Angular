import { Component, ElementRef ,HostListener} from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  //access dom element through ElementRef
  constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
  }

}



