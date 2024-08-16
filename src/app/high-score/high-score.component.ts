import { Component } from '@angular/core';
import { ScoreService } from '../score.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';


@Component({
    selector: 'app-high-score',
    templateUrl: './high-score.component.html',
    styleUrls: ['./high-score.component.css'],
    standalone: true,
    imports: [MatCardModule]
})
export class HighScoreComponent {

  highScore: any = 0;
  destroyed$ = new Subject();

  constructor(public scoreService: ScoreService){
    this.highScore = localStorage.getItem('HighScore');
  }

  ngOnInit(){
    this.scoreService.runningScore$.pipe(
      tap((runningScore: number) => {
        if (this.highScore < runningScore){
          this.highScore = runningScore;
          localStorage.setItem('HighScore',this.highScore.toString());
        }
      }),takeUntil(this.destroyed$)
    ).subscribe();

  }

  ngOnDestroy(): void {
    this.destroyed$.next(this.destroyed$);
    this.destroyed$.complete();
  };

}
