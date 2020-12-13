import { RESTDataSource } from 'apollo-datasource-rest';

export class PokemonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://pokeapi.co/api/v2/';
    console.log('constructor')
  }

  getPokemon(id: string): Promise<object> {
    console.log('datasource')
    return this.get(`pokemon/${id}`);
  }
}