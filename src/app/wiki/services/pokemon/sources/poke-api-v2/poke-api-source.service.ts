import { Injectable } from '@angular/core';
import { IPokemonList, PokemonService } from '../../pokemon.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PokeApi2Mapper } from '@app/wiki/services/pokemon/sources/poke-api-v2/mapper';

@Injectable()
export class PokeApiSourceService implements PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
  }

  list(): Observable<IPokemonList> {
    return this.http
      .cache()
      .get(`${this.apiUrl}pokemon`)
      .pipe(map(PokeApi2Mapper.mapList));
  }
}
