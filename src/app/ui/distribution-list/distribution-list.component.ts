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

  constructor(private listService:DistributionListService) { }

  ngOnInit() {
    this.listService
      .getAll()
      .subscribe(i => this.distributionList = i);
  }
}
