import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.css'],
    standalone: true,
    imports: [MatCardModule]
})
export class TitleComponent {


  refreshClicked(){
    window.location.reload();
  }
}
