import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
