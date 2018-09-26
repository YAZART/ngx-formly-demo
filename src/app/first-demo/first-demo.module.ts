import { NgModule } from '@angular/core';

import { FirstDemoComponent } from './view/first-demo.component';
import { RouterModule } from '@angular/router';
import { FirstDemoRoutes } from './first-demo.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(FirstDemoRoutes)
    ],
    exports: [],
    declarations: [FirstDemoComponent],
    providers: [],
})
export class FirstDemoModule { }
