import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>('https://gist.githubusercontent.com/Slashgear/386e7603eebf32fe51a7d5a5f3836d22/raw/0b595285127b7690301b9546d2e75bcda944a805/pokemons.json');
  }

}
