import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockfit',
  templateUrl: './cockfit.component.html',
  styleUrls: ['./cockfit.component.css'],
})
export class CockfitComponent implements OnInit {
  // public newServerName = '';
  public newServerContent = '';
  @Output() serverAdded = new EventEmitter<{ name: string; content: string }>();
  @Output() blueprintAdded = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @Output() serverReseted = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onAddServer(nameInput: HTMLInputElement) {
    this.serverAdded.emit({
      name: nameInput.value,
      content: this.newServerContent,
    });
  }

  public onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      name: nameInput.value,
      content: this.newServerContent,
    });
  }
}
