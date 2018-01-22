import { Component, OnInit ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'ilapp-device-add',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  @Output() eventOnAddDevice: EventEmitter<any> = new EventEmitter();
  data:any;

  constructor() { }

  ngOnInit() {
    this.data = {hostName:'',loopBack:''};
  }

  onSubmit(){
    this.eventOnAddDevice.emit({args:this.data});
  }


}
