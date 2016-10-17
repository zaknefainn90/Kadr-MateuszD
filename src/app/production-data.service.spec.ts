/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductionDataService } from './production-data.service';

describe('Service: ProductionData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductionDataService]
    });
  });

  it('should ...', inject([ProductionDataService], (service: ProductionDataService) => {
    expect(service).toBeTruthy();
  }));
});
