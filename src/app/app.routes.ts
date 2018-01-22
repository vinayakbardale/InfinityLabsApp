import {RouterModule, CanActivate} from '@angular/router';

const routes = [
    {path: 'home', loadChildren: './devices/devices.module#DevicesModule'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const APP_ROUTES = RouterModule.forRoot(routes);
