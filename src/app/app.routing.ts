import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './app-layout/app-layout.component';


const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '', component: AppLayoutComponent,
          children: [
            { path: 'customer', loadChildren: 'app/app-modules/customer/customer.module#CustomerModule' },
            { path: 'products', loadChildren: 'app/app-modules/products/products-list.module#ProductsModule' }
          ],
      },
];
@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
