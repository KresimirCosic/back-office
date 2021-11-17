import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}
