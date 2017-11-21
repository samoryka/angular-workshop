import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    return of([
      new Pokemon("Bulbasaur", 1),
      new Pokemon("Ivysaur", 2),
      new Pokemon("Venusaur", 3),
    ]);
  }

}
