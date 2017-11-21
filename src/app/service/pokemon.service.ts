import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemons(): Pokemon[] {
    return [
      new Pokemon("Bulbasaur", 1),
      new Pokemon("Ivysaur", 2),
      new Pokemon("Venusaur", 3),

    ];
  }

}
