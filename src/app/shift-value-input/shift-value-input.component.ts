import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shift-value-input',
  templateUrl: './shift-value-input.component.html',
  styleUrls: ['./shift-value-input.component.css'],
})
export class ShiftValueInputComponent {
  @Input()
  shiftVal!: number;

  @Output() shiftValChange = new EventEmitter<number>();

  get shiftValue() {
    return this.shiftVal;
  }

  set shiftValue(value: number) {
    this.shiftVal = value;
    this.shiftValChange.emit(this.shiftVal);
  }
}
