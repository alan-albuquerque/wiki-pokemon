import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPokemon, PokemonService } from '@app/wiki/services/pokemon/pokemon.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal-detail-pokemon',
  templateUrl: './modal-detail-pokemon.component.html',
  styleUrls: ['./modal-detail-pokemon.component.scss']
})
export class ModalDetailPokemonComponent implements OnInit {
  get pokemon(): IPokemon {
    return this._pokemon;
  }

  public pokemonId: number;

  private _pokemon: IPokemon;

  isLoading: boolean;

  constructor(public activeModal: NgbActiveModal, private pokemonService: PokemonService) {
  }

  ngOnInit() {
    this.loadPokemonDetail();
  }

  loadPokemonDetail() {
    if (!this.pokemonId) {
      this._pokemon = null;
      return;
    }
    this.isLoading = true;
    this.pokemonService.get(this.pokemonId)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((resp) => {
        this._pokemon = resp;
      });
  }

}
