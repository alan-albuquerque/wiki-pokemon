import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTableComponent } from './pokemon-table.component';
import { PokemonDetailDirective } from '@app/wiki/directives/pokemon-detail.directive';
import { ModalDetailPokemonComponent } from '@app/wiki/components/modal-detail-pokemon/modal-detail-pokemon.component';
import { ImgPokemonComponent } from '@app/wiki/components/img-pokemon/img-pokemon.component';
import { PokemonListComponent } from '@app/wiki/components/pokemon-list/pokemon-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('PokemonTableComponent', () => {
  let component: PokemonTableComponent;
  let fixture: ComponentFixture<PokemonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), SharedModule, NgbModule.forRoot(),],
      declarations: [PokemonTableComponent,
        ModalDetailPokemonComponent,
        PokemonDetailDirective,
        ImgPokemonComponent,
        PokemonListComponent,]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
