import { Directive , ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[PrdStyle]'
})

export class PrdStyleDirective implements OnChanges {

  @Input('PrdStyle') radius: string = '';

  constructor(private element: ElementRef) {

  }

  ngOnChanges(): void {
    this.element.nativeElement.style.borderRadius = `${this.radius}`;

  }


  @HostListener('mouseover') mouseOverFunc() {

    this.element.nativeElement.style.opacity = ".7";
  }

  
  @HostListener('mouseout') mouseOutFunc() {

    this.element.nativeElement.style.opacity = "1";

  }




}
