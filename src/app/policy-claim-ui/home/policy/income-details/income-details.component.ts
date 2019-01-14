import { PolicyFormBuilderService } from './../policy-form-builder.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl, FormArray, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit {
incomeDetailsFormArray:FormArray;
policyFormGroup:FormGroup;
  constructor(private policyFormBuilderService:PolicyFormBuilderService, private policyFormBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.policyFormBuilderService.getPolicyFormGroup());
    this.incomeDetailsFormArray=this.policyFormBuilderService.getPolicyFormGroup().get('incomeDetails') as FormArray;
    this.policyFormGroup=this.policyFormBuilderService.getPolicyFormGroup();
  }

  addIncomeDetails(){
    let  incomeDetailsFormGroup=  this.policyFormBuilder.group({
      incomeSource: new FormControl(''),
      totalIncome: new FormControl('')
    })

    this.incomeDetailsFormArray.push(incomeDetailsFormGroup);
  }

  removeIncomeDetails(i){
    this.incomeDetailsFormArray.removeAt(i);
  }

}
