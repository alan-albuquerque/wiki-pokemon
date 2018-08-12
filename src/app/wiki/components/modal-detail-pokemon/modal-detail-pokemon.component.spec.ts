import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailPokemonComponent } from './modal-detail-pokemon.component';

describe('ModalDetailPokemonComponent', () => {
  let component: ModalDetailPokemonComponent;
  let fixture: ComponentFixture<ModalDetailPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDetailPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
