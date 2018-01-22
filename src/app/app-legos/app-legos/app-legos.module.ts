import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { LegosModule } from "../../legos/legos.module";
import { ILAppDatatableComponent } from "./components/il-app-datatable/il-app-datatable.component";

@NgModule({
  imports: [LegosModule, CommonModule],
  declarations: [ILAppDatatableComponent],
  exports: [ILAppDatatableComponent]
})
export class AppLegosModule {}
