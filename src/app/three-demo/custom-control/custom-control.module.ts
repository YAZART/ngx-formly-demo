import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomControlComponent } from './custom-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomControlComponent
  ],
  declarations: [
    CustomControlComponent
  ]
})
export class CustomControlModule { }
