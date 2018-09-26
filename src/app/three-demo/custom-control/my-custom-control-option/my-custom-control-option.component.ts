import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-custom-control-option',
  templateUrl: './my-custom-control-option.component.html',
  styleUrls: ['./my-custom-control-option.component.css']
})
export class MyCustomControlOptionComponent {
  @Input() public key: string = "";
  @Input() public value: any;
  @Input() public selected: boolean = false;
  public selectAction: (key: string) => void = null;
  public selectOption() {
      if (this.selectAction) {
          this.selectAction(this.key);
      }
  }
}