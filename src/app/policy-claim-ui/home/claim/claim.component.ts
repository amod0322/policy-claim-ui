import { PlanNameService } from './plan-name.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  constructor(private planNameService:PlanNameService) { }

  ngOnInit() {
    this.planNameService.getPlanNames().subscribe(response=>{
      console.log(response);
    })
  }

}
