import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-first-demo',
  templateUrl: './first-demo.component.html',
  styleUrls: ['./first-demo.component.css']
})
export class FirstDemoComponent {
  exampleForm = this.fb.group({
    testInputArray: this.fb.array([
      this.fb.control('')
    ])
  });

  get testInputArray() {
    return this.exampleForm.get('testInputArray') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  addAlias() {
    this.testInputArray.push(this.fb.control(''));
  }
}
