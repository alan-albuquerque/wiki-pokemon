import { Observable } from 'rxjs';

export interface IPokemonListItem {
  name: string;
  id: number;
}

export interface IPokemonList {
  count: number;
  data: IPokemonListItem[];
}

export interface IPokemonType {
  id: number;
  name: string;
}

export interface ISkill {
  id: number;
  name: string;
}

export interface IPokemon {
  id: number;
  name: string;
  heightInCentimeters: number;
  weightInGram: number;
  types: IPokemonType[];
  skills: ISkill[];
}

export interface IListData {
  page: number;
  limit: number;
}

export abstract class PokemonService {
  abstract list(data: IListData): Observable<IPokemonList>;

  abstract get(id: number): Observable<IPokemon>;
}
