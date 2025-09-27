import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <div>
      <button (click)="increment()">Increment Counter</button>
    </div>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'signalEchad';

  ngOnInit(): void {
    
  }

  count = 0;

  increment = () => {
    this.count = this.count + 1;
  }
}
