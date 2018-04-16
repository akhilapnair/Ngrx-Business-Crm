import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer.routing';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

@NgModule({
  imports: [FormsModule, CommonModule, HttpModule, ReactiveFormsModule, CustomerRoutingModule],
  providers: [],
  declarations: [CustomerListComponent, CustomerDetailsComponent, CustomerAddComponent]
})
export class CustomerModule {}
