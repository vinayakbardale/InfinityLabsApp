import { Injectable } from "@angular/core";

@Injectable()
export class DevicesService {
  static count = 0;
  constructor() {}

  getDeviceList() {
    return [
      {
        id: 1,
        hostName: "h1",
        loopBack: "192.168.0.1"
      },
      {
        id: 2,
        hostName: "h2",
        loopBack: "192.168.0.2"
      }
    ];
  }

  getListConfig() {
    return {
      columns: [
        {
          header: "SR No.",
          field: "",
          templateConfig: {
            name: "SERIAL_NUMBER_TEMPLATE",
            data: {}
          }
        },
        {
          header: "Hostname",
          field: "hostName"
        },
        {
          header: "Loopback",
          field: "loopBack"
        }
      ]
    };
  }
}
