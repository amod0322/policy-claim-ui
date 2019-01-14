import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class PolicyFormBuilderService {
  policyFormGroup: FormGroup;
  constructor(private policyFormBuilder: FormBuilder) { }

  build(): FormGroup {
    this.policyFormGroup = this.policyFormBuilder.group({
      personalDetails: this.getPersonalDetailsFormGroup(),
      incomeDetails: this.getIncomeDetailsFormGroup(),
      nomineeDetails: this.getNomineeDetailsFormGroup(),
      policyDetails: this.getPolicyDetailsFormGroup()

    })
    return this.policyFormGroup;
  }

  getPolicyFormGroup() {
    return this.policyFormGroup
  }

  getPersonalDetailsFormGroup(): FormGroup {
    let personalDetails = this.policyFormBuilder.group({
      name: new FormControl('Rupa'),
      dob: new FormControl('')
    })
    return personalDetails;
  }

  getIncomeDetailsFormGroup(): FormArray{
    let incomeDetails = new FormArray([
    ]);
    let  incomeDetailsFormGroup=  this.policyFormBuilder.group({
      incomeSource: new FormControl(''),
      totalIncome: new FormControl('',[Validators.pattern("\d")])
    })
    incomeDetails.push(incomeDetailsFormGroup);
    return incomeDetails;
  }

  getNomineeDetailsFormGroup(): FormGroup {
    let nomineeDetails = this.policyFormBuilder.group({
      name: new FormControl(''),
      contactNumber: new FormControl(''),
      dob: new FormControl(''),
      relationship: new FormControl(''),
      percentageStake: new FormControl('')
    })
    return nomineeDetails;
  }

  getPolicyDetailsFormGroup(): FormGroup {
    let policyDetails = this.policyFormBuilder.group({
      planName: new FormControl(''),
      planType: new FormControl(''),
      tenure: new FormControl(''),
      premiumFrequency: new FormControl(''),
      insurredAmount: new FormControl(''),
      inssuranceDate: new FormControl(''),
      policyMatureDate: new FormControl(''),
      policyPremium: new FormControl(''),
      maturityDate: new FormControl(''),
      maturityAmount: new FormControl('')
    })
    return policyDetails;
  }


}
