import { ChangeDetectorRef,Component, OnInit, ViewEncapsulation } from "@angular/core";

import { DevicesService } from "./services/devices.service";

@Component({
  selector: "ilapp-device",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class DevicesComponent implements OnInit {
  list: any;
  config: any;
  constructor(private devicesService: DevicesService, private cdr: ChangeDetectorRef,) {}

  ngOnInit(): void {
    this.list = this.devicesService.getDeviceList();
    this.config = this.devicesService.getListConfig();
  }

  onAddDevice(event) {
    console.log(event);
    this.list.push(event.args);
    this.cdr.detectChanges();
    console.log(this.list);
  }
}
