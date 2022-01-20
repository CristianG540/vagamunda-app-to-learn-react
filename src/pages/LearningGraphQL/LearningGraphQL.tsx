import React, { FC } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
// Components
import { LearningGraphQLContent } from './containers/LearningGraphQLContent';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
});

export const LearningGraphQL: FC = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <LearningGraphQLContent />
      </ApolloProvider>
    </>
  );
};
