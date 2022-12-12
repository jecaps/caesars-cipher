import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  alphabet: string[] = [...'abcdefghijklmnopqrstuvwxyz'];
  shiftValue: number = 0;
  message: string = '';

  addNumber() {
    this.shiftValue += 1;
    console.log(this.message.split(''));
    console.log(this.alphabet.indexOf('d'));
  }
}
