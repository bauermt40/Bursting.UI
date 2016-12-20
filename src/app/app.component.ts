import {Component, OnInit, ElementRef} from '@angular/core';

import { ReportService } from './services/report.service';

import '../css/bootstrap.min.css';
import '../css/main.css';

@Component({
    selector: 'app',
    template: require('./app.component.html')
})

export class AppComponent implements OnInit {
    constructor(private elementRef: ElementRef, private reportService: ReportService) {}
    reportJSON: string = this.elementRef.nativeElement.getAttribute('report');
    ngOnInit() {
        this.reportService.setDataFromJSON(this.reportJSON);
        console.log(this.reportService.getReportModel());
    }
}
