import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '@app/wiki/services/pokemon/pokemon.service';
import { ModalDetailPokemonComponent } from './components/modal-detail-pokemon/modal-detail-pokemon.component';
import { PokemonDetailDirective } from '@app/wiki/directives/pokemon-detail.directive';
import { ImgPokemonComponent } from './components/img-pokemon/img-pokemon.component';
import { SharedModule } from '@app/shared';
import { PokeApiV2Service } from '@app/wiki/services/pokemon/sources/poke-api-v2/poke-api.service';
import { ModalDetailPokemonService } from '@app/wiki/services/modal/modal-detail-pokemon.service';
import { FavoritePokemonService } from '@app/wiki/services/favorite-pokemon/favorite-pokemon.service';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    TranslateModule,
  ],
  declarations: [
    ModalDetailPokemonComponent,
    PokemonDetailDirective,
    ImgPokemonComponent,
    PokemonListComponent,
    PokemonTableComponent,
  ],
  exports: [
    PokemonDetailDirective,
    ImgPokemonComponent,
    PokemonListComponent,
  ],
  entryComponents: [
    ModalDetailPokemonComponent
  ],
  providers: [
    {provide: PokemonService, useClass: PokeApiV2Service},
    ModalDetailPokemonService,
    FavoritePokemonService,
  ]
})
export class WikiModule {
}
