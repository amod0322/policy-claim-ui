import { PolicyFormBuilderService } from './../policy-form-builder.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.css']
})
export class PolicyDetailsComponent implements OnInit {
  policyDetailsFormGroup: FormGroup
  constructor(private policyFormBuilderService: PolicyFormBuilderService) { }

  ngOnInit() {
    console.log(this.policyFormBuilderService.getPolicyFormGroup())
    this.policyDetailsFormGroup = this.policyFormBuilderService.getPolicyFormGroup().get('policyDetails') as FormGroup;
    this.policyDetailsFormGroup.get('premiumFrequency').valueChanges.subscribe(value => {
      let insurredcAmount = this.policyDetailsFormGroup.get('insurredAmount')
        && this.policyDetailsFormGroup.get('insurredAmount').value > 0 ? this.policyDetailsFormGroup.get('insurredAmount').value : 1
      if (insurredcAmount && value) {
        this.policyDetailsFormGroup.get('maturityAmount').setValue(insurredcAmount*value);
      }
    })
  }

}
