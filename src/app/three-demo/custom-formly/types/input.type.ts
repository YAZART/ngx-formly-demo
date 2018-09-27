
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-formly-input',
  template: `
    <input class="form-control" [type]="type" [formControl]="formControl" [formlyAttributes]="field" [class.is-invalid]="showError"/>
  `
})
export class CustomFormlyInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }
}
