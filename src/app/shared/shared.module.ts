import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterAllPipe } from './pipe/filter-all.pipe';

@NgModule({
  declarations: [FilterAllPipe],
  imports: [CommonModule],
  exports: [FilterAllPipe],
})
export class SharedModule {}
