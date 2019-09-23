import { Directive, Output, HostListener, EventEmitter } from '@angular/core';



@Directive({
    selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {

    @Output() reachedBottom = new EventEmitter<any>();

    @HostListener('scroll', ['$event'])
    onScroll(e) {
        let el = e.target;
        if (el.scrollHeight === (el.scrollTop + el.offsetHeight)) {
            this.reachedBottom.emit();
        }
    }

}