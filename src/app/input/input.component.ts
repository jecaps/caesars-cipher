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
  transformationType: string = 'Encrypt';
  transformedMessage: string = '';

  transformMessage(transformationType: string) {
    let transformedText: string[] = [];
    let copiedAlphabet =
      transformationType === 'Decrypt'
        ? [...this.alphabet].reverse()
        : [...this.alphabet];
    this.message
      .toLowerCase()
      .split('')
      .map((letter) => {
        let letterIndex = copiedAlphabet.indexOf(letter) + this.shiftValue;
        letter === ' '
          ? transformedText.push(' ')
          : letterIndex >= copiedAlphabet.length
          ? transformedText.push(
              copiedAlphabet[letterIndex - copiedAlphabet.length]
            )
          : transformedText.push(copiedAlphabet[letterIndex]);
        this.transformedMessage = transformedText.join('');
      });
  }
}
