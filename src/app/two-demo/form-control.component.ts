import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  template: `
    <div [formGroup]="form">
        <label [attr.for]="question.key">{{question.label}}</label>

        <div [ngSwitch]="question.controlType">

        <input *ngSwitchCase="enums.ControlTypeSet.Text" [formControlName]="question.key"
                [id]="question.key" type="text">

        <select [id]="question.key" *ngSwitchCase="enums.ControlTypeSet.Dropdown" [formControlName]="question.key">
            <option *ngFor="let opt of question.options" [value]="opt.key">{{opt.value}}</option>
        </select>
        </div>
        <div class="errorMessage" *ngIf="!isValid">{{question.label}} is required</div>
  </div>

    `
})
export class FormControlComponent {
  @Input()
  question: IQuestionBase;
  @Input()
  form: FormGroup;
  public enums = {
    ControlTypeSet
  };
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}

export interface IQuestionBase {
  label: string;
  controlType: ControlTypeSet;
  key: string;
  options?: { key: string; value: string }[];
}

export enum ControlTypeSet {
  Text = 1,
  Dropdown = 2
}
