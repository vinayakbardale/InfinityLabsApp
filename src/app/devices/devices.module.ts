import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppLegosModule } from "../app-legos/app-legos/app-legos.module";
import { AddDeviceComponent } from "./components/add-device/add-device.component";
import { DeviceListComponent } from "./components/device-list/device-list.component";
import { DevicesComponent } from "./devices.component";
import { HOME_ROUTES } from "./devices.routes";
import { DevicesService } from "./services/devices.service";

@NgModule({
  imports: [
    FormsModule,
    AppLegosModule,
    CommonModule,
    RouterModule,
    HOME_ROUTES
  ],
  declarations: [DevicesComponent, DeviceListComponent, AddDeviceComponent],
  providers: [DevicesService],
  exports: []
})
export class DevicesModule {}
