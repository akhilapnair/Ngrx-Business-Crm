import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

const customerRoutes: Routes = [
  { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'customer-add', component: CustomerAddComponent }
];
@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
