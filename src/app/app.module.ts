import { ClaimModule } from './policy-claim-ui/home/claim/claim.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PolicyClaimUiComponent } from './policy-claim-ui/policy-claim-ui.component';
import { HomeComponent } from './policy-claim-ui/home/home.component';
import { LoginComponent } from './policy-claim-ui/login/login.component';
import { RegistrationComponent } from './policy-claim-ui/registration/registration.component';
import { PolicyModule } from './policy-claim-ui/home/policy/policy.module';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PolicyClaimUiComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PolicyModule,
    ClaimModule
  ],
  providers: [],
  bootstrap: [PolicyClaimUiComponent]
})
export class AppModule { }
