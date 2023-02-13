import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.css'],
})
export class ServerComponentComponent implements OnInit {
  @Input('srvElement')
  element!: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log(changes);
    console.log('element', this.element);

  }

}
