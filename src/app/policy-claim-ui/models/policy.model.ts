import { PolicyDetailsModel } from './policy-details.model';
import { NomineeDetailsModel } from './nominee-details.model';
import { IncomeDetailsModel } from './income-details.model';
import { PersonalDetailsModel } from "./personal-details.model";


export class PolicyModel{
    personalDetails:PersonalDetailsModel;
    incomeDetails:IncomeDetailsModel[];
    nomineeDetails:NomineeDetailsModel;
    policyDetails:PolicyDetailsModel;
}