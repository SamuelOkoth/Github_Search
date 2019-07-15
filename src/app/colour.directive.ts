import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appColour]'
})
export class ColourDirective {
 constructor(private elem:ElementRef){}
  @HostListener("click") onClicks(){
   this.textDeco("underline overline")
 }

 @HostListener("dblclick") onDoubleClicks(){
   this.textDeco("None")
 }

 private textDeco(action:string){
   this.elem.nativeElement.style.textDecoration=action;
  }

}
