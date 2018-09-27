import { NgModule } from '@angular/core';

import { ThreeDemoComponent } from './three-demo.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { CustomFormlyConfig } from './custom-formly/custom-formly.config';
import { CustomFormlyInputComponent } from './custom-formly/types/input.type';
import { CustomFormlyRadioComponent } from './custom-formly/types/radio.type';
import { CustomFormlySelectComponent } from './custom-formly/types/select.type';
import { CustomControlModule } from './custom-control/custom-control.module';
import { RouterModule } from '@angular/router';
import { FormlyWrapperDescriptionComponent } from './custom-formly/wrappers/formly-description.wrapper';
import { FormlyWrapperValidationMessagesComponent } from './custom-formly/wrappers/validation-message.wrapper';
import { CustomFormlyColorComponent } from './custom-formly/types/color.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomControlModule,
    RouterModule.forChild([
        { path: '', component: ThreeDemoComponent}
    ]),
    FormlyModule.forRoot(CustomFormlyConfig),

  ],
  exports: [
],
  declarations: [
    ThreeDemoComponent,
    CustomFormlyInputComponent,
    CustomFormlyRadioComponent,
    CustomFormlySelectComponent,
    FormlyWrapperDescriptionComponent,
    FormlyWrapperValidationMessagesComponent,
    CustomFormlyColorComponent
  ],
  providers: []
})
export class ThreeDemoModule {}
