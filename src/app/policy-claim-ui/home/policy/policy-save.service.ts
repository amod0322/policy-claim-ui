import { NomineeDetailsModel } from './../../models/nominee-details.model';
import { PolicyModel } from './../../models/policy.model';
import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PersonalDetailsModel } from '../../models/personal-details.model';

@Injectable({
  providedIn: 'root'
})
export class PolicySaveService {
  policyCreateUrl: string;
  policyModel:PolicyModel;

  constructor(private http: Http) { }


  savePolicyDetails(policyFormGroup: FormGroup) : Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let formModel = JSON.parse(JSON.stringify(policyFormGroup.getRawValue()));
    console.log("raw data =>",formModel);
    this.policyModel= new PolicyModel();
    this.policyModel.personalDetails=formModel.personalDetails;
    this.policyModel.incomeDetails=formModel.incomeDetails;
    this.policyModel.nomineeDetails=formModel.nomineeDetails;
    this.policyModel.policyDetails=formModel.policyDetails;

    let nomineeJson =this.buildNomineeDetailsModel(formModel);
    console.log("nomineejson=>",nomineeJson);
    console.log("body->",JSON.stringify(this.policyModel));


    return this.http.post(this.policyCreateUrl, JSON.stringify(this.policyModel), options).pipe(map((res: Response) => res.json()));
  }

  // buildPersonalDetailsModel(formModel:any){
  // personalDetailsModel :PersonalDetailsModel= new P

  // }

  // buildIncomeDetailsModel(){

  // }

  buildNomineeDetailsModel(formModel:any){
 let nomineeDetailsModel : NomineeDetailsModel= new NomineeDetailsModel();
 nomineeDetailsModel.name= formModel.nomineeDetails.name;
 nomineeDetailsModel.contactNumber=formModel.nomineeDetails.contactNumber;
 nomineeDetailsModel.dob=formModel.nomineeDetails.dob;
 nomineeDetailsModel.relationship=formModel.nomineeDetails.relationship;
 nomineeDetailsModel.percentageStake=formModel.nomineeDetails.percentageStake;
 return nomineeDetailsModel;

  }

  // buildPolicyDetaislModel(){

  // }
}

