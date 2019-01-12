import { PolicyDetailsModel } from './policy-details.model';
import { NomineeDetailsModel } from './nominee-details.model';
import { IncomeDetailsModel } from './income-details.model';
import { PersonalDetails } from "./personal-details.model";


export class Policy{
    personalDetails:PersonalDetails;
    incomeDetails:IncomeDetailsModel;
    nomineeDetails:NomineeDetailsModel;
    policyDetails:PolicyDetailsModel;
}