import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const materialUIModules = [
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
];

@NgModule({
  declarations: [],
  imports: [...materialUIModules],
  exports: [...materialUIModules],
})
export class MaterialModule {}
