
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-formly-radio',
  template: `
    <div [formGroup]="form">
      <div class="custom-control custom-radio" *ngFor="let option of to.options; let i = index;">
        <input class="custom-control-input" type="radio"
          [id]="id + '_' + i"
          [name]="id"
          [class.is-invalid]="showError"
          [attr.value]="option.value"
          [value]="option.value"
          [formControl]="formControl"
          [formlyAttributes]="field">
        <label class="custom-control-label" [for]="id + '_' + i">
          {{ option.label }}
        </label>
      </div>
    </div>
  `,
})
export class CustomFormlyRadioComponent extends FieldType { }
