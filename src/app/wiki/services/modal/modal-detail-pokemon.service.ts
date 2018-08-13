import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetailPokemonComponent } from '@app/wiki/components/modal-detail-pokemon/modal-detail-pokemon.component';

@Injectable()
export class ModalDetailPokemonService {
  constructor(private modalService: NgbModal) {
  }

  open(pokemonId: number) {
    const modalRef = this.modalService.open(ModalDetailPokemonComponent, {
      centered: true
    });
    const modal: ModalDetailPokemonComponent = modalRef.componentInstance;
    modal.loadPokemonDetail(pokemonId);
  }
}
