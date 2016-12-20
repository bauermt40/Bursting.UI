import { Injectable } from '@angular/core';

import { ReportModel } from '../models';

@Injectable()
export class ReportService {
    private reportModel: ReportModel;

    setDataFromJSON(reportJSON: string) {
        this.reportModel = JSON.parse(reportJSON);
    }

    getReportModel(): ReportModel {
        return this.reportModel;
    }
}