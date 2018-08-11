import { JsonObject, JsonProperty } from 'json2typescript';
import { PokemonUrlToIdConverter } from '@app/wiki/services/pokemon/sources/poke-api-v2/converters';

@JsonObject
export class ResponsePaginated {
  @JsonProperty('count', Number, true)
  count: number = undefined;
}

@JsonObject
export class PokemonListItem {
  @JsonProperty('name', String)
  name: string = undefined;

  @JsonProperty('url', String)
  url: string = undefined;

  @JsonProperty('url', PokemonUrlToIdConverter)
  id: number = undefined;
}

@JsonObject
export class PokemonList extends ResponsePaginated {
  @JsonProperty('results', [PokemonListItem])
  results: PokemonListItem[] = undefined;
}

