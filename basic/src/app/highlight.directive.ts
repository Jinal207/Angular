import { Directive,HostListener,Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightText: string | any;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightText);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("16px");
  }

  private highlight(fontSize: string) {
    this.el.nativeElement.style.fontSize = fontSize;
  }

}
