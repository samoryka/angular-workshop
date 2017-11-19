import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from './pokemon';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(items: Pokemon[], field: string): any {
    if (!items) return [];
    if (!field || field.length === 0) return items;
    return items.filter(it =>
      it.name.toLowerCase().indexOf(field.toLowerCase()) !== -1);
  }

}
