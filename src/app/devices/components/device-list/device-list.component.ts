import { Component, Input, OnInit } from "@angular/core";

import { DevicesService } from "../../services/devices.service";

@Component({
  selector: "ilapp-device-list",
  templateUrl: "./device-list.component.html",
  styleUrls: ["./device-list.component.scss"]
})
export class DeviceListComponent implements OnInit {
  @Input() data: Array<any>;
  @Input() config: any;

  constructor(private devicesService: DevicesService) {}

  ngOnInit() {
    console.log(this.data);
  }
}
