import { TestBed } from '@angular/core/testing';

import { PolicySaveService } from './policy-save.service';

describe('PolicySaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicySaveService = TestBed.get(PolicySaveService);
    expect(service).toBeTruthy();
  });
});
