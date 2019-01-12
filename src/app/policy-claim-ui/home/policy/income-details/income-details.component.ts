import { PolicyFormBuilderService } from './../policy-form-builder.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.component.html',
  styleUrls: ['./income-details.component.css']
})
export class IncomeDetailsComponent implements OnInit {
incomeDetailsFormGroup:FormGroup;
  constructor(private policyFormBuilderService:PolicyFormBuilderService) { }

  ngOnInit() {
    console.log(this.policyFormBuilderService.getPolicyFormGroup());
    this.incomeDetailsFormGroup=this.policyFormBuilderService.getPolicyFormGroup().get('incomeDetails') as FormGroup;
  }

}
