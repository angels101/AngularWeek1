import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

constructor(private elem:ElementRef) {}

@HostListener("click") onClick(){
  this.textDeco("None")
}

@HostListener("dblclick") onDoubleClicks(){
  this.textDeco("None")
}

private textDeco(action:string){
// this.elem.nativeElement.style.textDecoration= 'line-through';
this.elem.nativeElement.style.textDecoration= action;

  }

}
    
   


