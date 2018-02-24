import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomerListComponent } from './components/customer-list/cutomer-list.component';
import { CustomerRoutingModule } from './customer.routing';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
  ],
  providers: [ ],
  declarations: [
    CustomerListComponent,
  ]
})

export class CustomerModule { }
