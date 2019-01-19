import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() name: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
    console.log(this.control);
  }

}
