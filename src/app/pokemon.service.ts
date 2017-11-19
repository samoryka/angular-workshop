import { Injectable } from '@angular/core';
import {Pokemon} from './pokemon';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) {

  }

  public getPokemon(): Observable<Pokemon[]> {
    return this.httpClient
      .get<Pokemon[]>('https://gist.githubusercontent.com/Slashgear/386e7603eebf32fe51a7d5a5f3836d22/raw/0b595285127b7690301b9546d2e75bcda944a805/pokemons.json', {responseType: 'json'});
  }
}
