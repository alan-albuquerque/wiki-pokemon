import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { IPokemonList, PokemonService } from '@app/wiki/services/pokemon/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading: boolean;
  pokemonList: IPokemonList;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.pokemonService.list()
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((resp) => {
        this.pokemonList = resp;
      });
  }

}
