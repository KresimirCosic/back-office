import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/product/product.component';
import { StatsComponent } from './components/pages/stats/stats.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListControlsComponent } from './components/products-list-controls/products-list-controls.component';
import { ProductsListItemsComponent } from './components/products-list-items/products-list-items.component';
import { ProductsListItemComponent } from './components/products-list-item/products-list-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    StatsComponent,
    CreateProductFormComponent,
    ProductsListComponent,
    ProductsListControlsComponent,
    ProductsListItemsComponent,
    ProductsListItemComponent,
  ],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
