import { DevicesService } from '../../services/devices.service';
import { Component, OnInit ,Output,EventEmitter,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'ilapp-device-add',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddDeviceComponent implements OnInit {
  data:any;

  constructor(private devicesService:DevicesService) { }

  ngOnInit() {
    this.data = {id:'', hostName:'',loopBack:''};
  }

  onSubmit(){
    this.devicesService.addDevice(JSON.parse(JSON.stringify(this.data)));
  }


}
