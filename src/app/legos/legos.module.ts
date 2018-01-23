import { LocalStorageService } from './services/session.storage';
import { ILDialogComponent } from "./components/dialog/dialog.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ILDatatableComponent } from "./components/datatable/datatable.component";
import { DataTableModule, DialogModule } from "primeng/primeng";

@NgModule({
  imports: [CommonModule, DataTableModule,DialogModule],
  declarations: [ILDatatableComponent, ILDialogComponent],
  exports: [ILDatatableComponent, ILDialogComponent],
  providers:[LocalStorageService]
})
export class LegosModule {}
