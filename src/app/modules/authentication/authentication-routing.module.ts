import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnonymityGuard } from '../../guards/anonymity.guard';

import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AnonymityGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
