import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() control: AbstractControl;
  errMsg: string = '';
  constructor() { }

  ngOnInit() {
    this.control.statusChanges.subscribe(status => {
      this.checkStatus(status);
    })
  }

  checkStatus(statusInput) {
    if (statusInput === 'INVALID') {
      this.errMsg = 'NOT A VALID VALUE';
    }
  }

}
