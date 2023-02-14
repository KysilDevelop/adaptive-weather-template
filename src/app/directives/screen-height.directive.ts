import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScreenHeight]'
})
export class ScreenHeightDirective {

  constructor(private Ref: ElementRef) { 
    this.Ref.nativeElement.style.height = window.innerHeight;
    console.log(this.Ref.nativeElement.style, window.innerHeight);
  }

}
