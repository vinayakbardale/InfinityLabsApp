import { DeviceConfigService } from './services/devices.config.service';
import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { DevicesService } from './services/devices.service';

export interface Device {
  id?: number;
  hostName?: string;
  loopBack?: string;
}

@Component({
  selector: 'ilapp-device',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class DevicesComponent implements OnInit {
  deviceConfig: any;

  constructor(
    private devicesService: DevicesService,
    private configService: DeviceConfigService
  ) {}

  ngOnInit(): void {
    
  }
}
