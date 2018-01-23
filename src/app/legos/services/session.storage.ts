import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  getItem(key) {
      let item = localStorage.getItem(key);
      if(item !== undefined && item !== null){
        item = JSON.parse(item);
      }
    return item;
  }

  setItem(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }
}
