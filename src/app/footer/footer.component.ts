import { Component, ViewChild, ElementRef } from '@angular/core';
declare var $:JQueryStatic;

@Component({
    selector: 'footer-container',
    template: require('./footer.html')
})
export class FooterComponent {
    constructor(private el:ElementRef) {}

    runReport() {
        console.log('bursting report...');
    }
}