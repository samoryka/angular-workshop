import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './model/pokemon';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], condition: string): Pokemon[] {
    if( !pokemons) return [];
    if(!condition) return pokemons;
    return pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().indexOf(condition.toLowerCase()) !== -1);
  }

}
