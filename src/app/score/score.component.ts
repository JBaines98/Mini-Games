import { Component } from '@angular/core';
import { ScoreService } from '../score.service';
import { Subject, takeUntil, tap } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css'],
    standalone: true,
    imports: [MatCardModule]
})
export class ScoreComponent {

  currentScore: number = 0;
  destroyed$ = new Subject();

  constructor(public scoreService: ScoreService){}

  ngOnInit(){
    this.scoreService.runningScore$.pipe(
      tap((runningScore: number) => {
        this.currentScore = runningScore;
      }),takeUntil(this.destroyed$)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(this.destroyed$);
    this.destroyed$.complete();
  };

  refreshClicked(){
    window.location.reload();
  }
}
