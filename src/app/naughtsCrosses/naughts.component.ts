import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-naughts',
    templateUrl: './naughts.component.html',
    styleUrls: ['./naughts.component.css'],
    standalone: true,
    imports: [MatCardModule, MatRadioModule, FormsModule, MatButtonModule, NgIf]
})
export class NaughtsComponent {

  winner: string = '';
  isGameOver: boolean = false;
  symbolSelected: string = 'X';
  isCross: boolean = true;
  positions = [['','',''],
              ['','',''],
              ['','','']];

  refreshClicked(){
    window.location.reload();
  };

  checkWin2(){
    for(let y = 0; y < 3; y++){
      for(let x = 0; x < 3; x++){
        if(this.positions[y][0] === this.positions[y][1] && this.positions[y][0] === this.positions[y][2] && 
        this.positions[y][0] !== '' && this.positions[y][1] !== '' && this.positions[y][2] !== ''){
          this.isGameOver = true;
          if(this.positions[y][0] === 'X'){
            console.log("X WINS.");
            this.winner = 'X';
          }else{
            console.log("O WINS.");
            this.winner = 'O';
          }
        };
        if(this.positions[0][x] === this.positions[1][x] && this.positions[0][x] === this.positions[2][x] &&
        this.positions[0][x] !== '' && this.positions[1][x] !== '' && this.positions[2][x] !== ''){
          this.isGameOver = true;  
          if(this.positions[0][x] === 'X'){
            console.log("X WINS.");
            this.winner = 'X';
          }else{
            console.log("O WINS;");
            this.winner = 'O';
          }
        };
      };
    };
    if(this.positions[0][0] === this.positions[1][1] && this.positions[0][0] === this.positions[2][2] &&
      this.positions[0][0] !== '' && this.positions[1][1] !== '' && this.positions[2][2] !== ''){
        this.isGameOver = true;  
        if(this.positions[0][0] === 'X'){
          console.log("X WINS.");
          this.winner = 'X';
        }else{
          console.log("O WINS;");
          this.winner = 'O';
        }
    };
    if(this.positions[0][2] === this.positions[1][1] && this.positions[0][2] === this.positions[2][0] &&
      this.positions[0][2] !== '' && this.positions[1][1] !== '' && this.positions[2][0] !== ''){
        this.isGameOver = true;  
        if(this.positions[0][2] === 'X'){
          console.log("X WINS.");
          this.winner = 'X';
        }else{
          console.log("O WINS;");
          this.winner = 'O';
        }
    };
  };

  positionClicked(yAxis: number, xAxis: number){
    if(this.positions[yAxis][xAxis] === ''){
      if(this.symbolSelected === 'X'){
        this.positions[yAxis][xAxis] = 'X';
        this.symbolSelected = 'O';
      }else{
        this.positions[yAxis][xAxis] = 'O';
        this.symbolSelected = 'X';
      };
      this.checkWin2();
    };
  };

}
