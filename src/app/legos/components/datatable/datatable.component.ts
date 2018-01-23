import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  ViewChild,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "il-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ILDatatableComponent implements OnInit {
  @ViewChild("serialNumberTemplate") serialNumberTemplate: TemplateRef<any>;
  @ViewChild("defaultTemplate") defaultTemplate: TemplateRef<any>;
  @ViewChild("actionTemplate") actionTemplate: TemplateRef<any>;
  @Output() onActionTriggered: EventEmitter<any> = new EventEmitter();

  @Input() data: any;
  @Input() config: any;

  constructor() {}

  ngOnInit() {
    this.assginTemplates();
  }

  assginTemplates() {
    this.config.columns.forEach(col => {
      if (col.templateConfig) {
        switch (col.templateConfig.name) {
          case "SERIAL_NUMBER_TEMPLATE": {
            col.template = this.serialNumberTemplate;
            break;
          }
          case "ACTION_TEMPLATE": {
            col.template = this.actionTemplate;
            break;
          }
          default: {
            col.template = this.defaultTemplate;
          }
        }
      } else {
        col.template = this.defaultTemplate;
      }
    });
  }

  onActionTrigger(action,row,index){
    let t = {action:action,data:row,index:index};
    this.onActionTriggered.emit(t);
  }

}
