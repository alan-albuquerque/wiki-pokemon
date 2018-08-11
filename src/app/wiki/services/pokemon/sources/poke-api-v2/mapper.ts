import { JsonConvert } from 'json2typescript';
import { PokemonList } from '@app/wiki/services/pokemon/sources/poke-api-v2/dto';

export class PokeApi2Mapper {
  public static mapList(resp: any) {
    const jsonConvert: JsonConvert = new JsonConvert();
    const dto: PokemonList = jsonConvert.deserialize(resp, PokemonList);
    return {
      count: dto.count,
      data: dto.results.map((item) => {
        return {
          name: item.name,
          id: item.id,
        };
      })
    };
  }
}