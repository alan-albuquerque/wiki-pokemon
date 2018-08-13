import { Component, OnInit } from '@angular/core';
import { IPokemon, IPokemonList, PokemonService } from '@app/wiki/services/pokemon/pokemon.service';
import { FavoritePokemonService } from '@app/wiki/services/favorite-pokemon/favorite-pokemon.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  page = 1;
  pageSize = 7;
  collectionSize = 0;
  isLoading: boolean;
  pokemonList: IPokemonList;

  constructor(private pokemonService: PokemonService) {
  }

  pageChanged(page: number) {
    this.page = page;
    this.loadList();
  }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.isLoading = true;
    this.pokemonService.list({
      limit: this.pageSize,
      page: this.page
    })
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((resp) => {
        this.pokemonList = resp;
        this.collectionSize = resp.count;
      });
  }

}
