import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-guess-the-number',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent {

  arrayOfNumbersGuessed: number[] = [];
  numberGuessed?: number = undefined;
  computersNumber?: number = undefined;
  numberOfGuessesRemaining: number = 10;
  gameOver: boolean = false;

  constructor(){
    this.getComputerNumber();
  }

  ngOnInit(){
    if(this.numberOfGuessesRemaining === 0){
      this.gameOver = true;
    }
  }

  getComputerNumber(){
    this.computersNumber = Math.floor(Math.random() * 99) + 1;
    console.log(this.computersNumber);
  }

  guessClicked(){
    if(this.numberGuessed){
      this.numberGuessed = Number(this.numberGuessed);
      this.arrayOfNumbersGuessed.push(this.numberGuessed);
      this.checkIfCorrect(this.numberGuessed);
      this.numberOfGuessesRemaining--;
      // this.numberGuessed = undefined;
    }
  }

  checkIfCorrect(numberToCheck: number){
    if(this.computersNumber){
      if(this.computersNumber === numberToCheck){
        console.log("hello")
        console.log(numberToCheck, 'is correct! You win!');
      }
      if(this.computersNumber > numberToCheck){
        console.log(numberToCheck, 'is too low!');
      }
      if(this.computersNumber < numberToCheck){
        console.log(numberToCheck, 'is too high!');
      }
    }

  }
}
