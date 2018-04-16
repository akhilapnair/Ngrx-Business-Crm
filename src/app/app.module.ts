import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppRoutingModule } from './app.routing';
import { ProductsModule } from './app-modules/products/products.module';
import { MatIconModule } from '@angular/material/icon';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    CustomerDetailsComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    ProductsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
