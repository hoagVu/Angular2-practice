import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockfit',
  templateUrl: './cockfit.component.html',
  styleUrls: ['./cockfit.component.css'],
})
export class CockfitComponent implements OnInit {
  public newServerName = '';
  public newServerContent = '';

  constructor() {}

  ngOnInit() {}

  public onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }

  public onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent,
    // });
  }
  public getarea(event: any) {
    console.log(event);
  }
}
