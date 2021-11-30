import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonymityGuard } from '../../guards/anonymity.guard';
import { AuthenticationGuard } from '../../guards/authentication.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('../authentication/authentication.module').then(
        (module) => module.AuthenticationModule
      ),
    canActivate: [AnonymityGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../products/products.module').then(
        (module) => module.ProductsModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
