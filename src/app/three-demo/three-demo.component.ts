import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
    selector: 'app-three-demo',
    template: `
        <h1>Динамическая форма</h1>

        <button>+ Добавить Input</button>
        <button>+ Добавить Dropdown</button>
        <button>+ Добавить Radio</button>
        <app-color-control>
        </app-color-control>
        <form [formGroup] = "form">
            <formly-form [model]="model" [fields]="formFields" [form]="form">
            <button type="submit">OK</button>
            </formly-form>
        </form>
    `
})
export class ThreeDemoComponent {
    public form = new FormGroup({});
    public model = {};
    public formFields: FormlyFieldConfig[] = [];
}
