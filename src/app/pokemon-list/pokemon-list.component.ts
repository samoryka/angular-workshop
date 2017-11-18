import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  private pokemons: Pokemon[] = [new Pokemon(1, 'Bulbasaur'), new Pokemon(2, 'Ivysaur')];

  constructor() { }

  ngOnInit() {
  }

}
