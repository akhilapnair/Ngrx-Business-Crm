import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProductListComponent } from './components/products-list/products-list.component';
import { ProductsRoutingModule } from './products.routing';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
  ],
  providers: [ ],
  declarations: [
    ProductListComponent,
  ]
})

export class ProductsModule { }
