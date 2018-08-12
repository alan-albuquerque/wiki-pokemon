import { IPokemon, IPokemonList, IPokemonType, ISkill } from '@app/wiki/services/pokemon/pokemon.service';
import { IPokemonDetailResponse, IPokemonListResponse } from '@app/wiki/services/pokemon/sources/poke-api-v2/intefaces';
import { PokeApiUtils } from '@app/wiki/services/pokemon/sources/poke-api-v2/utils';

export class PokeApiV2Mapper {
  public static mapList(resp: IPokemonListResponse): IPokemonList {
    return {
      count: resp.count,
      data: resp.results.map((item) => {
        return {
          name: item.name,
          id: PokeApiUtils.extractPageNumber(item.url),
        };
      })
    };
  }

  public static mapDetail(resp: IPokemonDetailResponse): IPokemon {
    let types: IPokemonType[] = [];
    let skills: ISkill[] = [];
    if (resp.types && resp.types.length) {
      types = resp.types.map((item) => {
        return {
          name: item.type.name,
          id: PokeApiUtils.extractPageNumber(item.type.url)
        };
      });
    }
    if (resp.abilities && resp.abilities.length) {
      skills = resp.abilities.map((item) => {
        return {
          name: item.ability.name,
          id: PokeApiUtils.extractPageNumber(item.ability.url)
        };
      });
    }
    const height = resp.height ? resp.height * 10 : null;
    const weight = resp.weight ? resp.weight * 10 : null;
    return {
      name: resp.name,
      id: resp.id,
      heightInCentimeters: height,
      weightInGram: weight,
      types: types,
      skills: skills,
    };
  }
}