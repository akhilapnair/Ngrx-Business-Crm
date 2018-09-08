import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CustomerRoutingModule } from './customer.routing';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './container/customer-list/customer-list.component';
import { CustomerServiceService, reducers, CustomerEffect } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([CustomerEffect])
  ],
  providers: [CustomerServiceService],
  declarations: [
    CustomerDetailsComponent,
    CustomerAddComponent,
    CustomerListComponent
  ]
})
export class CustomerModule {}
