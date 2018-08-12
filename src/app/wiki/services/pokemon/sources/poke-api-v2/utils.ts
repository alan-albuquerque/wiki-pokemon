export class PokeApiUtils {
  public static extractPageNumber(path: string): number {
    try {
      return parseInt(path.split('/').slice(-2, -1)[0], 10);
    } catch (e) {
      return null;
    }
  }
}
