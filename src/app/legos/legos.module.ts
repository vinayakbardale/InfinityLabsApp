import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILDatatableComponent } from './components/datatable/datatable.component';
import { DataTableModule } from 'primeng/primeng';

@NgModule({
  imports: [CommonModule, DataTableModule],
  declarations: [ILDatatableComponent],
  exports: [ILDatatableComponent]
})
export class LegosModule {}
