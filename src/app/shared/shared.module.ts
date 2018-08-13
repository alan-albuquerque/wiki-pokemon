import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '@app/shared/loader/loader.component';
import { PokemonSearchInputComponent } from '@app/shared/pokemon-search-input/pokemon-search-input.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    LoaderComponent,
    PokemonSearchInputComponent,
  ],
  exports: [
    LoaderComponent,
    PokemonSearchInputComponent,
  ]
})
export class SharedModule {
}
