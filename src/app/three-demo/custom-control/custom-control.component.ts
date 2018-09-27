import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  forwardRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
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
  public opts: IColorValue[] = [
    {
      value: null,
      hex: '#ffffff',
      name: 'temp_color_1'
    },
    {
      value: 1,
      hex: '#000105',
      name: 'temp_color_2'
    },

    {
      value: 2,
      hex: '#3e6158',
      name: 'temp_color_3'
    },
    {
      value: 3,
      hex: '#3f7a89',
      name: 'temp_color_4'
    },
    {
      value: 4,
      hex: '#96c582',
      name: 'temp_color_5'
    },
    {
      value: 5,
      hex: '#b7d5c4',
      name: 'temp_color_6'
    },
    {
      value: 6,
      hex: '#bcd6e7',
      name: 'temp_color_7'
    },
    {
      value: 7,
      hex: '#7c90c1',
      name: 'temp_color_8'
    },
    {
      value: 8,
      hex: '#9d8594',
      name: 'temp_color_9'
    },
    {
      value: 9,
      hex: '#dad0d8',
      name: 'temp_color_10'
    }
  ];

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
    this.value = item;
    this.open = false;
    console.log(item);
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
