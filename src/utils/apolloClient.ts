import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://relation-service.next.id', // Use the Production URL
  cache: new InMemoryCache(),
});

export default client;
