
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-formly-color',
  template: `
    <app-color-control [formControl]="formControl" [formlyAttributes]="field"></app-color-control>
  `
})
export class CustomFormlyColorComponent extends FieldType {
}
