import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './components/pages/products/products.component';
import { ProductComponent } from './components/pages/product/product.component';
import { StatsComponent } from './components/pages/stats/stats.component';

import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListControlsComponent } from './components/products-list-controls/products-list-controls.component';
import { ProductsListItemsComponent } from './components/products-list-items/products-list-items.component';
import { ProductsListItemComponent } from './components/products-list-item/products-list-item.component';
import { ProductsListFilterFormComponent } from './components/products-list-filter-form/products-list-filter-form.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    StatsComponent,
    CreateProductFormComponent,
    ProductsListComponent,
    ProductsListControlsComponent,
    ProductsListItemsComponent,
    ProductsListItemComponent,
    ProductsListFilterFormComponent,
    EditProductFormComponent,
  ],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
