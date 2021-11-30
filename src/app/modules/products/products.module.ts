import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/product/product.component';

@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
