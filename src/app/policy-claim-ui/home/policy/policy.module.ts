import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { NomineeDetailsComponent } from './nominee-details/nominee-details.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';

@NgModule({
  declarations: [
    PolicyComponent, 
    PersonalDetailsComponent, 
    IncomeDetailsComponent, 
    NomineeDetailsComponent, 
    PolicyDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[PolicyComponent]
})
export class PolicyModule { }
