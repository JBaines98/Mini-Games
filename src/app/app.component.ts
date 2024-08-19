import { Component } from '@angular/core';
import { NaughtsComponent } from './naughtsCrosses/naughts.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { TitleComponent } from './title/title.component';
import { GuessTheNumberComponent } from "./guess-the-number/guess-the-number.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [TitleComponent, HideShowComponent, NaughtsComponent, GuessTheNumberComponent]
})
export class AppComponent {
  
}
