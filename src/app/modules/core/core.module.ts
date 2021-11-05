import { NgModule } from '@angular/core';

import { AuthenticationModule } from '../authentication/authentication.module';
import { ProductsModule } from '../products/products.module';

@NgModule({
  declarations: [],
  imports: [AuthenticationModule, ProductsModule],
})
export class CoreModule {}
