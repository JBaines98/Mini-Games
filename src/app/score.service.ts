import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  runningScore: number = -1;
  isGameOver: boolean = false;
  private behaviourRunningScore$ = new BehaviorSubject<number>(0);
  public runningScore$ = this.behaviourRunningScore$.asObservable();
  private behaviourGameOver$ = new BehaviorSubject<boolean>(false);
  public gameOver$ = this.behaviourGameOver$.asObservable();

  constructor() { }

  addOnePoint(){
    this.runningScore = this.runningScore + 1;
    this.behaviourRunningScore$.next(this.runningScore);
  }

  minusOnePoint(){
    this.runningScore = this.runningScore - 1;
    this.behaviourRunningScore$.next(this.runningScore);
  }

  timesUp(){
    this.isGameOver = true;
    this.behaviourGameOver$.next(this.isGameOver);
  }
}
