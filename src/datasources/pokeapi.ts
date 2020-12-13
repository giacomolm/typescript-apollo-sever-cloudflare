import { RESTDataSource } from 'apollo-datasource-rest';

export class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
  }

  getPokemon(id: string): Promise<object> {
    return this.get(`pokemon/${id}`);
  }
}