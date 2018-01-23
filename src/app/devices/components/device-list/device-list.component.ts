import { DeviceConfigService } from "../../services/devices.config.service";
import { Device } from "../../devices.component";
import {
  Component,
  ChangeDetectorRef,
  Input,
  OnInit,
  ViewEncapsulation
} from "@angular/core";

import { DevicesService } from "../../services/devices.service";

@Component({
  selector: "ilapp-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class DeviceListComponent implements OnInit {
  interfaceTableConfig: any;
  interfaceTableModal: any;
  deviceTableConfig: any;
  data: Array<any>;
  interfaceItem:Array<any>;
  selectedDevice:any;
  newInterface:any;

  constructor(
    private devicesService: DevicesService,
    private cdr: ChangeDetectorRef,
    private configService: DeviceConfigService
  ) {
    this.data = [];
    this.selectedDevice = {data:{}};
    this.newInterface = {interface:'',ip:''};
  }

  ngOnInit() {
    this.devicesService.getItemList().subscribe(res => {
      this.data = [];
      this.cdr.detectChanges();
      this.data = res;
    });
    this.deviceTableConfig = this.configService.getDeviceTableConfig();
    this.interfaceTableConfig = this.configService.getInterfaceTableConfig();
    this.interfaceTableModal = this.configService.getInterfaceConfig();
  }

  actionTriggered(event) {
    this.selectedDevice = event;
    if (event.action === "EDIT") {
      this.devicesService.editService(this.selectedDevice.data,this.selectedDevice.index);
    } else if (event.action === "DELETE") {
      this.devicesService.deleteDevice(event.index);
    } else if (event.action === "VIEW") {
      this.interfaceTableModal.display = true;
    }
  }

  addInterFace(){
    console.log(this.newInterface);
    let t = this.devicesService.addInterfaceDevice(this.selectedDevice.index,this.selectedDevice.data);
    this.selectedDevice.data = [];
    this.cdr.detectChanges();
    this.selectedDevice.data = t;
  }

}
