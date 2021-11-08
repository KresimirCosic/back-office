import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('../authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
