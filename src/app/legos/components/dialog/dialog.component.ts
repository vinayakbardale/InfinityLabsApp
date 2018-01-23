import {Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation} from '@angular/core';
import {Dialog} from 'primeng/primeng';

@Component({
    selector: 'il-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ILDialogComponent {
    @Input() config: any = {};
    @Input() display: boolean;
}
