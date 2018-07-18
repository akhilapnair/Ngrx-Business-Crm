import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';


const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: '', component: AppLayoutComponent,
          children: [
            { path: 'customer', loadChildren: 'app/app-modules/customer/customer.module#CustomerModule' },
            { path: 'products', loadChildren: 'app/app-modules/products/products.module#ProductsModule' }
          ]
      },
      {path:'login',component: AppLoginComponent}
];
@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
