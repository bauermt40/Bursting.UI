import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';
import { DistributionItem } from './../models/distribution-item';

@Injectable()
export class DistributionListService {

  private page: number = 1;
  private pageSize: number = 15;
  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  getAll(): Observable<DistributionItem[]> {
    return this.http
            .get(`${environment.apiUrl}/v1/distributionlist?pagination.page=${this.page}&pagination.pageSize=${this.pageSize}`)
            .map((response: Response) => <DistributionItem[]>response.json())
            .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}
