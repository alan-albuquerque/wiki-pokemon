import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '@app/wiki/services/pokemon/pokemon.service';
import { ModalDetailPokemonComponent } from './components/modal-detail-pokemon/modal-detail-pokemon.component';
import { PokemonDetailDirective } from '@app/wiki/directives/pokemon-detail.directive';
import { ImgPokemonComponent } from './components/img-pokemon/img-pokemon.component';
import { SharedModule } from '@app/shared';
import { PokeApiV2Service } from '@app/wiki/services/pokemon/sources/poke-api-v2/poke-api.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ModalDetailPokemonComponent,
    PokemonDetailDirective,
    ImgPokemonComponent,
  ],
  exports: [
    PokemonDetailDirective,
    ImgPokemonComponent,
  ],
  entryComponents: [
    ModalDetailPokemonComponent
  ],
  providers: [
    {provide: PokemonService, useClass: PokeApiV2Service}
  ]
})
export class WikiModule {
}
