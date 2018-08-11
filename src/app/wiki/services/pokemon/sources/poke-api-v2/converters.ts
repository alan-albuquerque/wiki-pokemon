import { JsonConverter, JsonCustomConvert } from 'json2typescript';

@JsonConverter
export class PokemonUrlToIdConverter implements JsonCustomConvert<Number> {
  private extractPageNumber(path: string): number {
    try {
      return parseInt(path.split('/').slice(-2, -1)[0], 10);
    } catch (e) {
      return null;
    }
  }

  serialize(date: Number): any {
    return date;
  }

  deserialize(date: any): Number {
    return this.extractPageNumber(date);
  }
}