import { Directive, HostListener, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailPokemonComponent } from '@app/wiki/components/modal-detail-pokemon/modal-detail-pokemon.component';

@Directive({
  selector: '[appPokemonDetail]'
})
export class PokemonDetailDirective {
  @Input('pokemon-id') pokemonId: number;

  constructor(private modalService: NgbModal) {
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalDetailPokemonComponent, {
      centered: true
    });
    const modal: ModalDetailPokemonComponent = modalRef.componentInstance;
    modal.pokemonId = this.pokemonId;
  }
}
