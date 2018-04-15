import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

const customerRoutes: Routes = [
  // { path: '', redirectTo: 'customer-add', pathMatch: 'full' },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-add', component: CustomerAddComponent }
];
@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
