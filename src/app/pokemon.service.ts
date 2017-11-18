import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class PokemonService {

  constructor() { }

  public getPokemon(): Observable<Pokemon[]> {
    return of([new Pokemon(1, 'Bulbasaur'), new Pokemon(2, 'Ivysaur')]);
  }
}
