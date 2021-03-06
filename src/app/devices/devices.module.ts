import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTableModule, DialogModule } from 'primeng/primeng';

import { LegosModule } from '../legos/legos.module';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DevicesComponent } from './devices.component';
import { HOME_ROUTES } from './devices.routes';
import { DeviceConfigService } from './services/devices.config.service';
import { DevicesService } from './services/devices.service';

@NgModule({
  imports: [
    FormsModule,
    LegosModule,
    CommonModule,
    RouterModule,
    HOME_ROUTES,
    DataTableModule,
    DialogModule
  ],
  declarations: [DevicesComponent, DeviceListComponent, AddDeviceComponent],
  providers: [DevicesService, DeviceConfigService],
  exports: []
})
export class DevicesModule {}
