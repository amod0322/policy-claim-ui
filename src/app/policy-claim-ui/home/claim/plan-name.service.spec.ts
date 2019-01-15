import { TestBed } from '@angular/core/testing';

import { PlanNameService } from './plan-name.service';

describe('PlanNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanNameService = TestBed.get(PlanNameService);
    expect(service).toBeTruthy();
  });
});
