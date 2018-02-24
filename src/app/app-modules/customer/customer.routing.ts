import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { CustomerListComponent } from './components/customer-list/cutomer-list.component';

const customerRoutes: Routes = [
    { path: '', component: CustomerListComponent },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(customerRoutes)
    ],
    exports: [RouterModule]
  })
  export class CustomerRoutingModule { }