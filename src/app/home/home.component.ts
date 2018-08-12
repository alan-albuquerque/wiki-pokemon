import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IPokemonList, PokemonService } from '@app/wiki/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page = 1;
  pageSize = 7;
  collectionSize = 0;
  isLoading: boolean;
  pokemonList: IPokemonList;

  constructor(private pokemonService: PokemonService) {
  }

  pageChanged(page: number) {
    console.log(page);
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
      page: this.page,
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
