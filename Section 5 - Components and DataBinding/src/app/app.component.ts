import { Component, ViewEncapsulation } from '@angular/core';

const defaultServer = [
  { type: 'server', name: 'Test', content: 'This is a test!' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements: { type: string; name: string; content: string }[] = [
    ...defaultServer,
  ];

  onServerAdded(value: { name: string; content: string }) {
    if (value.name && value.content) {
      this.serverElements.push({
        type: 'server',
        name: value.name || '',
        content: value.content || '',
      });
    }
  }

  onBlueprintAdded(value: { name: string; content: string }) {
    if (value.name && value.content) {
      this.serverElements.push({
        type: 'blueprint',
        name: value.name || '',
        content: value.content || '',
      });
    }
  }
  onResetServer() {
    this.serverElements = defaultServer;
  }
}
