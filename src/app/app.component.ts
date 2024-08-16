import { Component } from '@angular/core';
import { NaughtsComponent } from './naughtsCrosses/naughts.component';
import { HideShowComponent } from './hide-show/hide-show.component';
import { TitleComponent } from './title/title.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [TitleComponent, HideShowComponent, NaughtsComponent]
})
export class AppComponent {
  
}
