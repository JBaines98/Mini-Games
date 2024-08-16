import { Component } from '@angular/core';
import { ScoreService } from '../score.service';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
    standalone: true,
    imports: [MatCardModule]
})
export class TimerComponent {

  constructor(public scoreService: ScoreService){
    this.startCountdown();
  }

  countdown: number = 30

  startCountdown() {
    let counter = 30;
      
    const interval = setInterval(() => {
      console.log(counter);
      this.countdown = counter;
      counter--;
        
      if (counter < 0 ) {
        this.timesUp();
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }

  timesUp(){
    this.scoreService.timesUp();
  }
}
