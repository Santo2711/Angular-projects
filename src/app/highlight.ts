import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)':'onMouseEnter()',
    '(mouseleave)':'onMouseLeave()'
  },
})
export class Highlight {
  private el=inject(ElementRef)

  appHighlight=input('');


  constructor() {
    this.el.nativeElement.style.transition='background-color 0.5s ease';
   }
   onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = (this.appHighlight()||'lightblue');
   }
    onMouseLeave() { 
    this.el.nativeElement.style.backgroundColor = '';
   }

  

}
