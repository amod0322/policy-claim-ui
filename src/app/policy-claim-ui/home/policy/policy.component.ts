import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {



  navigation=PolicyNavigation;
  presentPolicy:PolicyNavigation;
  constructor() { }

  ngOnInit() {
    this.presentPolicy=PolicyNavigation.PERSONAL_DETAILS;

  }

  navigationChange(){
    this.presentPolicy=PolicyNavigation.INCOME_DETAILS;
  }

}

enum PolicyNavigation{
  PERSONAL_DETAILS,
  INCOME_DETAILS,
  NOMINEE_DETAILS,
  POLICY_DETAILS
}


