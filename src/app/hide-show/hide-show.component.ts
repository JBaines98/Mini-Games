import { Component } from '@angular/core';
import { ScoreService } from '../score.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { ScoreComponent } from '../score/score.component';
import { HighScoreComponent } from '../high-score/high-score.component';
import { TimerComponent } from '../timer/timer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-hide-show',
    templateUrl: './hide-show.component.html',
    styleUrls: ['./hide-show.component.css'],
    standalone: true,
    imports: [MatCardModule, TimerComponent, HighScoreComponent, ScoreComponent, NgIf, MatButtonModule]
})
export class HideShowComponent {

  showIndex = 1;
  isGameOver: boolean = false;
  destroyed$ = new Subject();

  constructor(public scoreService: ScoreService){
    this.numberClicked();
    this.scoreService.gameOver$.pipe(
      tap((isGameOver: boolean) => {
        if(isGameOver){
          this.isGameOver = true;
          console.log("Game Over.")
        }
      }),takeUntil(this.destroyed$)
    ).subscribe()
  }


  ngOnDestroy(): void {
    this.destroyed$.next(this.destroyed$);
    this.destroyed$.complete();
  };

  numberClicked(){
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    if(this.showIndex === randomNumber){
      if(randomNumber === 9){
        randomNumber = randomNumber - 1;
        this.scoreService.addOnePoint();
        this.showIndex = randomNumber;
      }else{
        randomNumber = randomNumber + 1;
        this.scoreService.addOnePoint();
        this.showIndex = randomNumber;
      }
    }else{
      this.showIndex = randomNumber;
      this.scoreService.addOnePoint();
    }

  }


  bunnyClicked(){
    var randomNumber = Math.floor(Math.random() * 9) + 1;
    if (this.showIndex === randomNumber){
      if(randomNumber === 9){
        randomNumber = randomNumber - 1;
        this.scoreService.minusOnePoint();
        this.showIndex = randomNumber;
      }else{
        randomNumber = randomNumber + 1;
        this.scoreService.minusOnePoint();
        this.showIndex = randomNumber;
      }
    }else{
      this.showIndex = randomNumber;
      this.scoreService.minusOnePoint();
    }
  }

  refreshClicked(){
    window.location.reload();
  }


}
