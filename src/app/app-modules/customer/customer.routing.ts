import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { CustomerListComponent } from './components/customer-list/customer-list.component';

const customerRoutes: Routes = [
  { path: '', redirectTo: 'customer/customerlist', pathMatch: 'full'},
    { path: 'customerlist', component: CustomerListComponent },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(customerRoutes)
    ],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule { }
