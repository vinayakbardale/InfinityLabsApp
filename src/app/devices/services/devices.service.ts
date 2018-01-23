import { LocalStorageService } from "../../legos/services/session.storage";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class DevicesService {
  static count = 0;
  store: Array<any>;
  private subject = new Subject<any>();

  constructor(private localStorageService: LocalStorageService) {
    this.store = [];
  }

  getItemList(): Observable<any> {
    return this.subject.asObservable();
  }

  addDevice(item) {
    this.store.push(item);
    this.updateStorage();
  }

  editService(item, index) {
    this.store[index] = item;
    this.updateStorage();
  }

  deleteDevice(index) {
    this.store.splice(index, 1);
    this.updateStorage();
  }

  addInterfaceDevice(index, data) {
    if (!this.store[index].interfaces) {
      this.store[index].interfaces = [];
    }
    let t = JSON.stringify(data);
    this.store[index].interfaces.push(JSON.parse(t));
    this.updateStorage();
    return this.store[index];
  }

  updateStorage() {
    this.localStorageService.setItem("DEVICE", this.store);
    this.subject.next(this.localStorageService.getItem("DEVICE"));
  }
}
