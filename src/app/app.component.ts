import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unsubscription-hoc';
  public alive: boolean = true;

  public destroy() {
    this.alive = false;
  }

  public revive() {
    this.alive = true;
  }
}
