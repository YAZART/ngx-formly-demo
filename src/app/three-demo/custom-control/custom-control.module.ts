import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomControlComponent } from './custom-control.component';
import { MyCustomControlOptionComponent } from './my-custom-control-option/my-custom-control-option.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomControlComponent, MyCustomControlOptionComponent
  ],
  declarations: [
    CustomControlComponent, MyCustomControlOptionComponent
  ]
})
export class CustomControlModule { }