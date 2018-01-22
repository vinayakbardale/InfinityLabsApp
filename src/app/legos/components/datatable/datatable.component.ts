import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "il-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"]
})
export class ILDatatableComponent implements OnInit {
  @Input() data: any;
  @Input() config: any;

  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }
}
