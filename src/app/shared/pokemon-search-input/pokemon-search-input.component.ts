import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDetailPokemonService } from '@app/wiki/services/modal/modal-detail-pokemon.service';
import { ToastrService } from 'ngx-toastr';
import { extract } from '../../core/i18n.service';

@Component({
  selector: 'app-pokemon-search-input',
  templateUrl: './pokemon-search-input.component.html',
  styleUrls: ['./pokemon-search-input.component.scss']
})
export class PokemonSearchInputComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modalDetailPokemonService: ModalDetailPokemonService,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      search: this.fb.control('', [Validators.required, Validators.pattern(/[0-9]/)]),
    });
  }

  submitPokemonSearch(e: any) {
    this.submitted = true;
    e.preventDefault();
    if (this.form.invalid) {
      this.toastr.error(extract('Digite o número (ID) do Pokémon'), null, {
        positionClass: 'toast-bottom-center',
        timeOut: 2000
      });
      return;
    }
    this.submitted = false;
    const pokeId = this.form.get('search').value;
    if (!pokeId || !pokeId.toString().length) {
      return;
    }
    this.modalDetailPokemonService.open(parseInt(pokeId, 10));
  }
}
