import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serverElements: { type: string; name: string; content: string }[] = [
    { type: 'server', name: 'Test', content: 'This is a test!' },
  ];
}
