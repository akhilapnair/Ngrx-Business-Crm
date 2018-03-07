import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './components/products-list/products-list.component';

const productsRoutes: Routes = [
    { path: 'products-list', component: ProductListComponent },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(productsRoutes)
    ],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }
