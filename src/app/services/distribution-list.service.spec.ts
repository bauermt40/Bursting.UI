/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DistributionListService } from './distribution-list.service';

describe('DistributionListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistributionListService]
    });
  });

  it('should ...', inject([DistributionListService], (service: DistributionListService) => {
    expect(service).toBeTruthy();
  }));
});
