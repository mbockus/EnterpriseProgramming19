import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSurpriseWubba]'
})
export class SurpriseWubbaDirective implements OnInit {
    
  initialText: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.initialText = this.el.nativeElement.innerText;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeText('WubbaLubbaDubDub!');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeText(this.initialText);
  }

  private changeText(text: string) {
    this.el.nativeElement.innerText = text;
  }

}
