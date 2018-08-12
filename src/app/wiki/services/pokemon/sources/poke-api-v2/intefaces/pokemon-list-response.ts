interface Result {
  url: string;
  name: string;
}

export interface IPokemonListResponse {
  count: number;
  previous?: any;
  results: Result[];
  next: string;
}

