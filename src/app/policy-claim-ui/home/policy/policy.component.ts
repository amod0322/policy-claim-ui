import { PolicySaveService } from './policy-save.service';
import { PolicyFormBuilderService } from './policy-form-builder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {



  navigation = PolicyNavigation;
  presentPolicy: PolicyNavigation;
  constructor(private policyFormBuilder: PolicyFormBuilderService, private policySaveService: PolicySaveService) { }

  ngOnInit() {
    this.presentPolicy = PolicyNavigation.PERSONAL_DETAILS;
    this.policyFormBuilder.build()

  }

  navigationNextChange() {

    if (this.presentPolicy == PolicyNavigation.PERSONAL_DETAILS) {
      console.log(this.policyFormBuilder.getPolicyFormGroup().get('personalDetails').value)
    }


    if (this.presentPolicy == PolicyNavigation.PERSONAL_DETAILS) {
      this.presentPolicy = PolicyNavigation.INCOME_DETAILS;
    } else if (this.presentPolicy == PolicyNavigation.INCOME_DETAILS) {
      this.presentPolicy = PolicyNavigation.NOMINEE_DETAILS;
    } else if (this.presentPolicy == PolicyNavigation.NOMINEE_DETAILS) {
      this.presentPolicy = PolicyNavigation.POLICY_DETAILS;
    } else if (this.presentPolicy == PolicyNavigation.POLICY_DETAILS) {
      this.policySaveService.savePolicyDetails(this.policyFormBuilder.getPolicyFormGroup());
    }

  }

  navigationBackChange() {
    if (this.presentPolicy == PolicyNavigation.POLICY_DETAILS) {
      this.presentPolicy = PolicyNavigation.NOMINEE_DETAILS;
    } else if (this.presentPolicy == PolicyNavigation.NOMINEE_DETAILS) {
      this.presentPolicy = PolicyNavigation.INCOME_DETAILS;
    } else if (this.presentPolicy == PolicyNavigation.INCOME_DETAILS) {
      this.presentPolicy = PolicyNavigation.PERSONAL_DETAILS;
    }
  }

}

enum PolicyNavigation {
  PERSONAL_DETAILS,
  INCOME_DETAILS,
  NOMINEE_DETAILS,
  POLICY_DETAILS
}


