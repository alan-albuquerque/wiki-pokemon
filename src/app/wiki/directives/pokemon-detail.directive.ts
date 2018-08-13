import { Directive, HostListener, Input } from '@angular/core';
import { ModalDetailPokemonService } from '@app/wiki/services/modal/modal-detail-pokemon.service';

@Directive({
  selector: '[appPokemonDetail]'
})
export class PokemonDetailDirective {
  @Input('pokemon-id') pokemonId: number;

  constructor(private modalDetailPokemonService: ModalDetailPokemonService) {
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.modalDetailPokemonService.open(this.pokemonId);
  }

}
