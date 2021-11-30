import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/product/product.component';
import { StatsComponent } from './components/pages/stats/stats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: ':id',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
