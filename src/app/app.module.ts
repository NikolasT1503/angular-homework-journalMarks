import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JournalModule } from './journal/journal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JournalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
