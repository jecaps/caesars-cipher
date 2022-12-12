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

  decryptedMessage: string = '';
  encryptedMessage: string = '';

  encryptMessage() {
    let encryptedText: string[] = [];
    this.message
      .toLowerCase()
      .split('')
      .map((letter) => {
        let letterIndex = this.alphabet.indexOf(letter) + this.shiftValue;
        letterIndex >= this.alphabet.length
          ? encryptedText.push(
              this.alphabet[letterIndex - this.alphabet.length]
            )
          : encryptedText.push(this.alphabet[letterIndex]);
        console.log((this.encryptedMessage = encryptedText.join('')));
      });
  }
}
