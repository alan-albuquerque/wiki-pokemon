import { TestBed, inject } from '@angular/core/testing';

import { FavoritePokemonService } from './favorite-pokemon.service';

describe('FavoritePokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoritePokemonService]
    });
  });

  it('should be created', inject([FavoritePokemonService], (service: FavoritePokemonService) => {
    expect(service).toBeTruthy();
  }));
});
