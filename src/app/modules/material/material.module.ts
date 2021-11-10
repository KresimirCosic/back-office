import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

const materialUIModules = [MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...materialUIModules],
  exports: [...materialUIModules],
})
export class MaterialModule {}
