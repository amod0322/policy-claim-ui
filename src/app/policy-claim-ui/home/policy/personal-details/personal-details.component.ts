import { PolicyFormBuilderService } from './../policy-form-builder.service';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
personalDetilsFormGroup:FormGroup;
  constructor(private policyFormBuilderService:PolicyFormBuilderService) { }

  ngOnInit() {
    console.log(this.policyFormBuilderService.getPolicyFormGroup());
    this.personalDetilsFormGroup=this.policyFormBuilderService.getPolicyFormGroup().get('personalDetails') as FormGroup;
  }

}
