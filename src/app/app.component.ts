import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Just Playin\' Around';

  constructor() {
    setTimeout(() => {
      this.title = 'Just Playin\' Around, bcuz I ain\'t got a fuck To-Do';
    }, 5000); // this all is happening without even reloading the page
  }
}
