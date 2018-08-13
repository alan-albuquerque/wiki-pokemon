import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokeApiV2Mapper } from '@app/wiki/services/pokemon/sources/poke-api-v2/mapper';
import { IListData, IPokemon, IPokemonList, PokemonService } from '@app/wiki/services/pokemon/pokemon.service';
import { map } from 'rxjs/operators';
import { IPokemonListResponse } from '@app/wiki/services/pokemon/sources/poke-api-v2/intefaces';

@Injectable()
export class PokeApiV2Service extends PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {
    super();
  }

  list(data: IListData): Observable<IPokemonList> {
    return this.http
      .cache()
      .get<IPokemonListResponse>(`${this.apiUrl}pokemon/${data.name || ''}`, {
        params: {
          offset: ((data.page * data.limit) - data.limit).toString(),
          limit: data.limit.toString(),
        }
      })
      .pipe(map(PokeApiV2Mapper.mapList));
  }

  get(id: number): Observable<IPokemon> {
    return this.http
      .cache()
      .get<IPokemon>(`${this.apiUrl}pokemon/${id}/`)
      .pipe(map(PokeApiV2Mapper.mapDetail));
  }
}
