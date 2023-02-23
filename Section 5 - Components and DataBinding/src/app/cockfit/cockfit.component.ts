import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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

  @ViewChild('serverContentInput') serverContentInput : any;

  constructor() {}

  ngOnInit() {}

  public onAddServer(nameInput: HTMLInputElement) {
    this.serverAdded.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  public onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
