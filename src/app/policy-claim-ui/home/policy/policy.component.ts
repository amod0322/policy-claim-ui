import { PolicyFormBuilderService } from './policy-form-builder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {



  navigation=PolicyNavigation;
  presentPolicy:PolicyNavigation;
  constructor(private policyFormBuilder:PolicyFormBuilderService) { }

  ngOnInit() {
    this.presentPolicy=PolicyNavigation.PERSONAL_DETAILS;
    this.policyFormBuilder.build()

  }

  navigationChange(){
    
    if(this.presentPolicy==PolicyNavigation.PERSONAL_DETAILS){
      console.log(this.policyFormBuilder.getPolicyFormGroup().get('personalDetails').value)
    }
    this.presentPolicy=PolicyNavigation.INCOME_DETAILS;
  }

}

enum PolicyNavigation{
  PERSONAL_DETAILS,
  INCOME_DETAILS,
  NOMINEE_DETAILS,
  POLICY_DETAILS
}


