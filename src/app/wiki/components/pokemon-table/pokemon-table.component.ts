import { Component, Input, OnInit } from '@angular/core';
import { IPokemon, IPokemonList } from '@app/wiki/services/pokemon/pokemon.service';
import { FavoritePokemonService } from '@app/wiki/services/favorite-pokemon/favorite-pokemon.service';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent implements OnInit {
  @Input() pokemonList: IPokemonList;

  constructor(public favoritePokemonService: FavoritePokemonService) {
  }

  ngOnInit() {
  }

  changeIsFavorite(pokemon: IPokemon) {
    this.favoritePokemonService.toggle(pokemon);
  }

  isFavorite(pokemon: IPokemon) {
    return this.favoritePokemonService.isFavorite(pokemon);
  }
}
