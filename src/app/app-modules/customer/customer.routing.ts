import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { CustomerListComponent } from './container/customer-list/customer-list.component';

const customerRoutes: Routes = [
  { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-add', component: CustomerAddComponent }
];
@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
