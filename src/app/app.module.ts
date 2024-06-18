import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './front.component';
import { LivesIndicatorComponent } from './lives-indicator/lives-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    LivesIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
