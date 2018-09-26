import { Routes } from '@angular/router';
import {
    MainComponent,
} from './views/main.component';

export const AppRoutes: Routes = [
    {
        path: '', component: MainComponent
    },
    {
        path: 'demo-1', loadChildren: './first-demo/first-demo.module#FirstDemoModule'
    },
    {
        path: 'demo-2', loadChildren: './two-demo/two-demo.module#TwoDemoModule'
    }
];
