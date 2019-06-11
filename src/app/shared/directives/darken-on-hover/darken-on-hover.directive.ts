import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
    selector: '[alpicDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    constructor(private el: ElementRef,
                private render: Renderer) { }

    @HostListener('mouseover')
    darkenOn() { // chamado quando passar o mouse em cima
// tslint:disable-next-line: max-line-length
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(70%'); // render: permite manipular o DOM sem necessariamente dizer o que preciso fazer
    }

    @HostListener('mouseleave')
    darkenOff() { // chamado quando tirar o mouse de cima
        this.render.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%');
    }
}
