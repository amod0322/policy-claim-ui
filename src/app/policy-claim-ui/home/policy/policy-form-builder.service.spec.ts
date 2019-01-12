import { TestBed } from '@angular/core/testing';

import { PolicyFormBuilderService } from './policy-form-builder.service';

describe('PolicyFormBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyFormBuilderService = TestBed.get(PolicyFormBuilderService);
    expect(service).toBeTruthy();
  });
});
