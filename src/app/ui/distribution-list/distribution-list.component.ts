import { Component, OnInit } from '@angular/core';

import { DistributionItem } from './../../models/distribution-item';
import { DistributionListService } from './../../services/distribution-list.service';

@Component({
  selector: 'app-distribution-list',
  templateUrl: './distribution-list.component.html',
  styleUrls: ['./distribution-list.component.css']
})
export class DistributionListComponent implements OnInit {

  distributionList: DistributionItem[] = [];

  constructor(private _listService:DistributionListService) { }

  ngOnInit() {
    this.getAllItems();
  }

  private getAllItems(): void {
    this._listService
      .getAll()
      .subscribe((items:DistributionItem[]) => this.distributionList = items,
                  error => console.log(error),
                  () => console.log('Get all items complete'));
  }
}
