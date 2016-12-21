import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';
import { DistributionItem } from './../models/distribution-item';

@Injectable()
export class DistributionListService {

  constructor(private http: Http) {}

  getAll(): Observable<DistributionItem[]> {
    let item$ = this.http
                  .get(`${environment.apiUrl}/v1/distributionlist`, {headers: this.getHeaders()})
                  .map(this.mapDistributionItem);
                  return item$;
  }

  private mapDistributionItem(response:Response): DistributionItem[] {
    return response.json().results.map(this.toDistributionItem);
  }

  private toDistributionItem(r: any): DistributionItem {
    let item = <DistributionItem>({
      DistributionListId: r.DistributionListId,
      Name: r.Name,
      ClientId: r.ClientId,
      ReportId: r.ReportId
    });
    return item;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
