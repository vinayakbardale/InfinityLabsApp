import { Component, Input, OnInit,ViewChild ,TemplateRef} from "@angular/core";

@Component({
  selector: "ilapp-legos-datatable",
  templateUrl: "./il-app-datatable.component.html",
  styleUrls: ["./il-app-datatable.component.scss"]
})
export class ILAppDatatableComponent implements OnInit {

  @ViewChild('serialNumberTemplate') serialNumberTemplate: TemplateRef<any>;
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  

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
                    case 'SERIAL_NUMBER_TEMPLATE': {
                        col.template = this.serialNumberTemplate;
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

}
