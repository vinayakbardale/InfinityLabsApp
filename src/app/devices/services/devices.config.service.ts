import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DeviceConfigService {
  constructor() {}

  getInterfaceConfig() {
    return {
      header: 'Linked Address - 05',
      display: false,
      responsive: 'true',
      class: '',
      width: 700
    };
  }
  getInterfaceTableConfig() {
    return {
      columns: [
        {
          header: 'SR No.',
          field: '',
          templateConfig: {
            name: 'SERIAL_NUMBER_TEMPLATE',
            data: {}
          }
        },
        {
          header: 'Interface',
          field: 'Interface'
        },
        {
          header: 'IP',
          field: 'ip'
        }
      ]
    };
  }

  getDeviceTableConfig() {
    return {
      columns: [
        {
          header: 'SR No.',
          field: '',
          templateConfig: {
            name: 'SERIAL_NUMBER_TEMPLATE',
            data: {}
          }
        },
        {
          header: 'Hostname',
          field: 'hostName'
        },
        {
          header: 'Loopback',
          field: 'loopBack'
        },
        {
          header: 'Action',
          field: '',
          templateConfig: {
            name: 'ACTION_TEMPLATE',
            data: {}
          }
        }
      ]
    };
  }
}
