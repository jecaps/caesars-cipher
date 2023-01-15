import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  alphabet: string[] = [...'abcdefghijklmnopqrstuvwxyz'];
  shiftValue!: number;
  message: string = '';
  transformationType: string = 'Encrypt';
  output: string = '';
  title = 'material-practice';

  constructor(public matDialog: MatDialog) {}

  transformMessage() {
    let transformedText: string[] = [];
    let copiedAlphabet =
      this.transformationType === 'Decrypt'
        ? [...this.alphabet].reverse()
        : [...this.alphabet];
    this.message
      .toLowerCase()
      .split('')
      .map((letter) => {
        if (this.shiftValue > 0 && this.shiftValue < 26) {
          let letterIndex = copiedAlphabet.indexOf(letter) + this.shiftValue;
          if (letter === ' ') {
            transformedText.push(' ');
          } else if (letterIndex >= copiedAlphabet.length) {
            transformedText.push(
              copiedAlphabet[letterIndex - copiedAlphabet.length]
            );
          } else {
            transformedText.push(copiedAlphabet[letterIndex]);
          }
          this.output = transformedText.join('');
          this.message = '';
        }
      });
    this.matDialog.open(DialogComponent, {
      data: {
        output: this.output,
        transformationType: this.transformationType,
        message: this.message,
      },
    });
  }
}
