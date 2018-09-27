import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-three-demo',
  template: `
  <div class="container">
        <h1>Динамическая форма</h1>
            <button (click)="addInput()">+ Добавить Input</button>
            <button (click)="addDropdown()">+ Добавить Dropdown</button>
            <button (click)="addRadio()">+ Добавить Radio</button>
            <button (click)="addCustom()">+ Добавить Color</button>
            <p>
            <form [formGroup] = "form">
                <formly-form [form]="form" [fields]="formFields" [options]="formOprions" [model]="model">
                <button type="submit">OK</button>
                </formly-form>
            </form>

            <pre> FormValue: {{form.value |json}}</pre>
            <p>{{model  | json}}
        </div>
    `
})
export class ThreeDemoComponent {
  public form = new FormGroup({});
  public model = {};

  public formOprions: FormlyFormOptions = {};
  public formFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: []
    }
  ];
  private _counter = 0;
  public addCustom() {
    this._counter++;
    this.formFields[0].fieldGroup.push({
      type: 'color',
      key: 'Color_' + this._counter,
      className: 'col-lg-3',
      wrappers: ['custom-description'],
      templateOptions: {
        description: 'testComponentColor',
        required: true
      },
      parsers: [value => value.hex]
    });
    this._updateConfig();
  }
  public addInput() {
    this._counter++;
    this.formFields[0].fieldGroup.push({
      type: 'input',
      key: 'Input_' + this._counter,
      className: 'col-lg-3',
      templateOptions: {
        type: 'text',
        required: true,
        description: 'testComponentInput'
      }
    });
    this._updateConfig();
  }
  public addRadio() {
    this._counter++;
    this.formFields[0].fieldGroup.push({
      key: 'Radio_' + this._counter,
      type: 'radio',
      className: 'col-lg-3',
      templateOptions: {
        label: 'Radio',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' }
        ]
      }
    });
    this._updateConfig();
  }
  public addDropdown() {
    this._counter++;
    this.formFields[0].fieldGroup.push({
      key: 'Select_' + this._counter,
      type: 'select',
      className: 'col-lg-3',
      templateOptions: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' }
        ]
      }
    });
    this._updateConfig();
  }

  private _updateConfig() {
    this.formFields = [...this.formFields];
  }
}
