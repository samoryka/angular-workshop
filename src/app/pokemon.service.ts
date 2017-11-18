import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  public getPokemon(): Pokemon[] {
    return [new Pokemon(1, 'Bulbasaur'), new Pokemon(2, 'Ivysaur')];
  }
}
