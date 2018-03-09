import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './containers/product-list/product-list.component';



const productsRoutes: Routes = [
    { path: '', component: ProductListComponent },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(productsRoutes)
    ],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }
