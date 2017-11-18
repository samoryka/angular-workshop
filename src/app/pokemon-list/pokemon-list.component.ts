import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  private pokemons = [{
    name: 'Bulbasaur',
    id: 1,
  }, {
    name: 'Ivysaur',
    id: 2,
  }, {
    name: 'Venusaur',
    id: 3,
  }, {
    name: 'Charmander',
    id: 4,
  }];

  constructor() { }

  ngOnInit() {
  }

}
