import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { SearchComponent } from './search/search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    SearchComponent,
    PokemonListComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
