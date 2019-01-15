import { PolicyDetailsModel } from './../../models/policy-details.model';
import { IncomeDetailsModel } from './../../models/income-details.model';
import { PolicyModel } from './../../models/policy.model';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms'
import { PersonalDetailsModel } from '../../models/personal-details.model';
import { NomineeDetailsModel } from '../../models/nominee-details.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyFormBuilderService {
  policyFormGroup: FormGroup;
  constructor(private policyFormBuilder: FormBuilder) { }

  build(policyModel:PolicyModel): FormGroup {
    policyModel=policyModel?policyModel:new PolicyModel();
    let personalDetailsModel = policyModel.personalDetails?policyModel.personalDetails: new PersonalDetailsModel();
    let incomeDetailsArray = policyModel.incomeDetails?policyModel.incomeDetails: [];
    let nomineeDetailsModel = policyModel.nomineeDetails?policyModel.nomineeDetails: new NomineeDetailsModel();
    let policyDetailsModel = policyModel.policyDetails?policyModel.policyDetails: new PolicyDetailsModel();



    this.policyFormGroup = this.policyFormBuilder.group({
      personalDetails: this.getPersonalDetailsFormGroup(personalDetailsModel),
      incomeDetails: this.getIncomeDetailsFormGroup(incomeDetailsArray),
      nomineeDetails: this.getNomineeDetailsFormGroup(nomineeDetailsModel),
      policyDetails: this.getPolicyDetailsFormGroup(policyDetailsModel)

    })
    return this.policyFormGroup;
  }

  getPolicyFormGroup() {
    return this.policyFormGroup
  }

  getPersonalDetailsFormGroup(personalDetailsModel: PersonalDetailsModel): FormGroup {
    let personalDetails = this.policyFormBuilder.group({
      name: new FormControl(personalDetailsModel.name),
      dob: new FormControl(personalDetailsModel.dob)
    })
    return personalDetails;
  }

  getIncomeDetailsFormGroup(incomeDetailsArray:IncomeDetailsModel[]): FormArray{
    
    let incomeDetails = new FormArray([
    ]);

    if(incomeDetailsArray.length==0){
      

      incomeDetailsArray.push(new IncomeDetailsModel() );
    }

    incomeDetailsArray.forEach(income=>{
      let  incomeDetailsFormGroup=  this.policyFormBuilder.group({
        incomeSource: new FormControl(income.incomeSource,[Validators.pattern("[a-c]*")]),
        totalIncome: new FormControl(income.totalIncome,[Validators.pattern("[0-9]*")])
      })
      incomeDetails.push(incomeDetailsFormGroup);
    })

    
    return incomeDetails;
  }

  getNomineeDetailsFormGroup(nomineeDetailsModel:NomineeDetailsModel): FormGroup {
    let nomineeDetails = this.policyFormBuilder.group({
      name: new FormControl(nomineeDetailsModel.name),
      contactNumber: new FormControl(nomineeDetailsModel.contactNumber),
      dob: new FormControl(nomineeDetailsModel.dob),
      relationship: new FormControl(nomineeDetailsModel.relationship),
      percentageStake: new FormControl(nomineeDetailsModel.percentageStake)
    })
    return nomineeDetails;
  }

  getPolicyDetailsFormGroup(policyDetailsModel:PolicyDetailsModel): FormGroup {
    let policyDetails = this.policyFormBuilder.group({
      planName: new FormControl(policyDetailsModel.planName),
      planType: new FormControl(policyDetailsModel.planType),
      tenure: new FormControl(policyDetailsModel.tenure),
      premiumFrequency: new FormControl(policyDetailsModel.premiumFrequency),
      insurredAmount: new FormControl(policyDetailsModel.insurredAmount),
      inssuranceDate: new FormControl(policyDetailsModel.inssuranceDate),
      policyMatureDate: new FormControl(policyDetailsModel.policyMatureDate),
      policyPremium: new FormControl(policyDetailsModel.policyPremium),
      maturityDate: new FormControl(policyDetailsModel.maturityDate),
      maturityAmount: new FormControl(policyDetailsModel.maturityAmount)
    })
    return policyDetails;
  }






}
