import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
