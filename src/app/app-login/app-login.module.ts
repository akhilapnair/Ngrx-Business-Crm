import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import { AppLoginComponent } from './app-login.component';

@NgModule({
  imports: [
    CommonModule,
    AppLoginRoutingModule
  ],
  declarations: [AppLoginComponent]
})
export class AppLoginModule { }
