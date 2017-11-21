import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [
    new Pokemon("Bulbasaur", 1),
    new Pokemon("Ivysaur", 2),
    new Pokemon("Venusaur", 3),

  ]
  constructor() { }

  ngOnInit() {
  }

}
