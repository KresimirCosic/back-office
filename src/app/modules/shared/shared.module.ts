import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { PageComponent } from './components/page/page.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoaderComponent } from './components/loader/loader.component';

const sharedModules = [CommonModule, MaterialModule];
const sharedComponents = [PageComponent, SidenavComponent, LoaderComponent];

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
})
export class SharedModule {}
