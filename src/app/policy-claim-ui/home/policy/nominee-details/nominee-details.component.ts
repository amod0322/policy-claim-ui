import { PolicyFormBuilderService } from './../policy-form-builder.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-nominee-details',
  templateUrl: './nominee-details.component.html',
  styleUrls: ['./nominee-details.component.css']
})
export class NomineeDetailsComponent implements OnInit {
nomineeDetailsFormGroup:FormGroup;
  constructor(private policyFormBuilderService:PolicyFormBuilderService) { }

  ngOnInit() {
    console.log(this.policyFormBuilderService.getPolicyFormGroup());
    this.nomineeDetailsFormGroup=this.policyFormBuilderService.getPolicyFormGroup().get('nomineeDetails') as FormGroup;
  }

}
