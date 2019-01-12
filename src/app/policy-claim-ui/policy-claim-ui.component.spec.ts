import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyClaimUiComponent } from './policy-claim-ui.component';

describe('PolicyClaimUiComponent', () => {
  let component: PolicyClaimUiComponent;
  let fixture: ComponentFixture<PolicyClaimUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyClaimUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyClaimUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
