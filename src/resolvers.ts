import { PokemonAPI } from './datasources';

export default {
  Query: {
    pokemon(source: unknown, args: { id: string }, context: { dataSources: { pokemonAPI: PokemonAPI } }) {
      console.log("resolver")
      return context.dataSources.pokemonAPI.getPokemon(args.id);
    },
  },
};