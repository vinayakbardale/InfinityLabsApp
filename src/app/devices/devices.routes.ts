import {RouterModule} from '@angular/router';
import {DevicesComponent} from './devices.component';

const routes = [
    {
        path: '',
        component: DevicesComponent
    }
];

export const HOME_ROUTES = RouterModule.forChild(routes);
