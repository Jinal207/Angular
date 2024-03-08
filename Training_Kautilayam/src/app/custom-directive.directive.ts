import {Directive,HostListener,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  constructor(private el: ElementRef) { }

  @Input('appCustomDirective') highlightColor!:string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("blue");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
