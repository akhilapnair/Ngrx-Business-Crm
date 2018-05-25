import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';

import { ProductsRoutingModule } from './products.routing';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { BasicListComponent } from './components/basic-list/basic-list.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [ProductListComponent, BasicListComponent]
})
export class ProductsModule {}
