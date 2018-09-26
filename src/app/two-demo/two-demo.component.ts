import { Component, OnInit } from '@angular/core';
import { IQuestionBase, ControlTypeSet } from './form-control.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-two-demo',
  template: `
    <div>
        <button (click)="addDropdown()">+ Add Dropdown</button> <button (click)="addInput()">+ Add Input</button>
        <form [formGroup]="form">
            <div *ngFor="let question of questions" class="form-row">
                <app-form-control [question]="question" [form]="form"></app-form-control>
            </div>
            <p>
            Form Value: {{form.value | json}}
        </form>
    </div>
    `
})
export class TwoDemoComponent {
  public questions: IQuestionBase[] = [];
  public form: FormGroup = new FormGroup({});
  private _counter = 0;

  public addDropdown() {
    this._counter++;
    this.form.addControl(`droppdown_${this._counter}`, new FormControl());
    this.questions.push({
      label: 'Dropdown#' + this._counter,
      key: `droppdown_${this._counter}`,
      controlType: ControlTypeSet.Dropdown,
      options: [
        { key: 'option1', value: 'Option 1' },
        { key: 'option2', value: 'Option 2' },
        { key: 'option3', value: 'Option 3' }
      ]
    });
  }
  public addInput() {
    this._counter++;
    this.form.addControl(`input_${this._counter}`, new FormControl());
    this.questions.push({
      label: 'Input#' + this._counter,
      key: `input_${this._counter}`,
      controlType: ControlTypeSet.Text,
    });
  }
}
