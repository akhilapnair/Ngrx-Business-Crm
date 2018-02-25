import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './app-layout/app-layout.component';


const appRoutes = [
      { path: '', component: AppLayoutComponent,
        children: [
          {
            path: 'customer',
            loadChildren: 'app/app-modules/customer.module#CustomerModule'
          }
        ],
      },]
@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
