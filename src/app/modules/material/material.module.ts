import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const materialUIModules = [MatInputModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...materialUIModules],
  exports: [...materialUIModules],
})
export class MaterialModule {}
