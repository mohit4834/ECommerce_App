import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookLoginRoutingModule } from './facebook-login-routing.module';
import { FacebookLoginComponent } from './facebook-login.component';


@NgModule({
  declarations: [
    FacebookLoginComponent
  ],
  imports: [
    CommonModule,
    FacebookLoginRoutingModule
  ]
})
export class FacebookLoginModule { }
