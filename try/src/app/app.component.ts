import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular try';

  post = {
    body: 'Baba 108',
    liked: true,
    count: 68
  }
}
