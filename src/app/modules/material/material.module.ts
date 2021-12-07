import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';

const materialUIModules = [
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDividerModule,
];

@NgModule({
  declarations: [],
  imports: [...materialUIModules],
  exports: [...materialUIModules],
})
export class MaterialModule {}
