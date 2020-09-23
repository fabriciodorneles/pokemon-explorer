import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link: new HttpLink({ uri: 'https://graphql-pokemon2.vercel.app' }),
});

export default client;
