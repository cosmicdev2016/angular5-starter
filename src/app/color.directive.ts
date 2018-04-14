import { Directive } from '@angular/core';
//for directive
import { HostListener, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private renderer: Renderer, private el: ElementRef) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  hover(shouldUnderline: boolean) {
    if (shouldUnderline) {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'red');
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
      if (this.el.nativeElement.id === 'zoomId')
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'scale(1.5)');
      console.log(this.el);
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'color', 'green');
      this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'overline');
      if (this.el.nativeElement.id === 'zoomId')
        this.renderer.setElementStyle(this.el.nativeElement, 'transform', 'scale(1)');
    }
  }

}
