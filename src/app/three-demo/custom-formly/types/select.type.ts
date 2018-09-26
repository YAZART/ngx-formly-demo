import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-custom-formly-select',
    template: `
    <select class="form-control"
        [formControl]="formControl"
        [class.is-invalid]="showError"
        [formlyAttributes]="field">
        <option *ngIf="to.placeholder" [ngValue]="null">{{ to.placeholder }}</option>
        <ng-container *ngFor="let item of to.options">
            <option [ngValue]="item.value" [disabled]="item.disabled">{{ item.label }}</option>
        </ng-container>
    </select>
    `
})

export class CustomFormlySelectComponent extends FieldType {
}
