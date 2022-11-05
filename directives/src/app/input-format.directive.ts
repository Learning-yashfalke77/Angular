import { Directive, HostListener, ElementRef, Input } from '@angular/core';

// Host Listener allow us to subscribe to the dom events, raised from the dom elements that hosting this directive

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // for single properties
  @Input('appInputFormat') format:any;

  // for multiple properties
  // @Input('format') format:any;

  constructor(private el:ElementRef) { }


  // @HostListener("focus") onFocus(){
  //   console.log("onFocus")
  // }
  @HostListener("blur") onBlur(){
    let value: string = this.el.nativeElement.value 
    if(this.format==="uppercase"){
      this.el.nativeElement.value = value.toUpperCase()
    } else {
      this.el.nativeElement.value = value.toLowerCase()
    }

  }


}
