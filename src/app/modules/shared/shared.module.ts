import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { PageComponent } from './components/page/page.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SidenavControlsComponent } from './components/sidenav-controls/sidenav-controls.component';
import { OverlayComponent } from './components/overlay/overlay.component';

const sharedModules = [CommonModule, MaterialModule];
const sharedComponents = [
  PageComponent,
  SidenavComponent,
  SidenavControlsComponent,
  OverlayComponent,
  LoaderComponent,
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [RouterModule, ...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
})
export class SharedModule {}
