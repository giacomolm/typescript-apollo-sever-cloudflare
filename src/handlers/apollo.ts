import { ApolloServer } from 'apollo-server-cloudflare';
import { Request as ApolloRequest, Response } from 'apollo-server-env';
import { graphqlCloudflare } from 'apollo-server-cloudflare/dist/cloudflareApollo';
import { PokemonAPI } from '../datasources';
import typeDefs from '../schema';
import resolvers from '../resolvers';

const createServer = (graphQLOptions: object): ApolloServer =>
    new ApolloServer({
        typeDefs,
        introspection: true,
        resolvers,
        dataSources: () => ({
            pokemonAPI: new PokemonAPI(),
        }),
        ...graphQLOptions
    });

export const handler = (request: Request, graphQLOptions: object): Promise<Response> => {
    const server = createServer(graphQLOptions);
    return graphqlCloudflare(() => server.createGraphQLServerOptions(request as ApolloRequest))(request as ApolloRequest);
};
