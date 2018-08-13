import { Injectable } from '@angular/core';
import { IPokemon } from '../pokemon/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritePokemonService {
  KEY = 'favorite_pokemon';

  constructor() {
  }

  getAll(): number[] {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]');
  }

  isFavorite(pokemon: IPokemon): boolean {
    return this.getAll().filter(id => id === pokemon.id).length > 0;
  }

  add(pokemon: IPokemon): boolean {
    try {
      if (this.isFavorite(pokemon)) {
        return true;
      }
      const favorites = this.getAll();
      favorites.push(pokemon.id);
      localStorage.setItem(this.KEY, JSON.stringify(favorites));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  remove(pokemon: IPokemon): boolean {
    try {
      if (!this.isFavorite(pokemon)) {
        return true;
      }
      const favorites = this.getAll();
      favorites.splice(favorites.indexOf(pokemon.id), 1);
      localStorage.setItem(this.KEY, JSON.stringify(favorites));
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  toggle(pokemon: IPokemon) {
    if (this.isFavorite(pokemon)) {
      return this.remove(pokemon);
    }
    return this.add(pokemon);
  }
}
