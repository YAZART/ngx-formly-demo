import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  forwardRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MyCustomControlOptionComponent } from './my-custom-control-option/my-custom-control-option.component';
import { IColorValue } from './color-value.model';

@Component({
  selector: 'app-color-control',
  templateUrl: 'custom-control.component.html',
  styleUrls: ['custom-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlComponent),
      multi: true
    }
  ]
})
export class CustomControlComponent implements ControlValueAccessor {
  // Inputs

  @Input()
  public opts: IColorValue[] = [];

  @Input()
  public get value(): IColorValue {
    return this._value;
  }
  public set value(val: IColorValue) {
    if (val) {
      this._value = val;
      this._cvaOnChange(this._value);
      this._valueChange.emit(this._value);
    }
  }

  public open = false;

  public disabled = false;
  public _valueChange: EventEmitter<IColorValue> = new EventEmitter<
    IColorValue
  >();
  private _value: any = null;
  private _cvaOnChange: (value: IColorValue) => void = () => {};
  private _onTouched: () => void = () => {};

  public selectOption(item) {
    this.value = item.value;
    this.open = false;
  }

  public writeValue(value: IColorValue): void {
    this.value = value;
  }
  // Implemented as part of ControlValueAccessor.
  public registerOnChange(fn: (value: IColorValue) => void): void {
    this._cvaOnChange = fn;
  }

  // Implemented as part of ControlValueAccessor.
  public registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public toggle() {
    this.open = !this.open;
    this._onTouched();
  }
  public close() {
    this.open = false;
  }
}
