import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimComponent } from './claim.component';

@NgModule({
  declarations: [ClaimComponent],
  imports: [
    CommonModule
  ],
  exports: [ClaimComponent]
})
export class ClaimModule { }
