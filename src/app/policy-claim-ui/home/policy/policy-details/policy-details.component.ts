import { PolicyFormBuilderService } from './../policy-form-builder.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {
policyFormGroup:FormGroup
  constructor(private policyFormBuilderService:PolicyFormBuilderService) { }

  ngOnInit() {
    console.log(this.policyFormBuilderService.getPolicyFormGroup())
    this.policyFormGroup=this.policyFormBuilderService.getPolicyFormGroup().get('policyDetails') as FormGroup;
  }

}
