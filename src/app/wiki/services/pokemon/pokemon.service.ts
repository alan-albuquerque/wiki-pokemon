import { Observable } from 'rxjs';

export interface IPokemonListItem {
  name: string;
  id: number;
}

export interface IPokemonList {
  count: number;
  data: IPokemonListItem[];
}

export abstract class PokemonService {
  abstract list(): Observable<IPokemonList>;

}
