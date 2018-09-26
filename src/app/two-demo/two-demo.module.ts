import { NgModule } from '@angular/core';

import { TwoDemoComponent } from './two-demo.component';
import { FormControlComponent } from './form-control.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path: '', component: TwoDemoComponent}
        ])
    ],
    exports: [],
    declarations: [TwoDemoComponent, FormControlComponent],
    providers: [],
})
export class TwoDemoModule { }
