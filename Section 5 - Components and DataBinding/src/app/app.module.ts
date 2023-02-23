import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockfitComponent } from './cockfit/cockfit.component';
import { ServerComponentComponent } from './server-component/server-component.component';
@NgModule({
  declarations: [AppComponent, CockfitComponent, ServerComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
