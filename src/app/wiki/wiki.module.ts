import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '@app/wiki/services/pokemon/pokemon.service';
import { PokeApiSourceService } from '@app/wiki/services/pokemon/sources/poke-api-v2/poke-api-source.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {provide: PokemonService, useClass: PokeApiSourceService}
  ]
})
export class WikiModule {
}
