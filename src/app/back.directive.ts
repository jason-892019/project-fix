import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
    selector: '[backButton]'
})
export class BackDirective {
    constructor(private location: Location) { }

    @HostListener('click')
    onClick() {
        this.location.back();
    }
}