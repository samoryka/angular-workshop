import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchComponent } from './search/search.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    PokemonListComponent,
    SearchComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
