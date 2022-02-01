import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
// Components
import { LearningGraphQLContent } from './containers/LearningGraphQLContent';
// Store
/**
 * Importo el store de redux, este se encarga de manejar el estado
 * global de la aplicación
 */
 import { store } from './redux/configureStore';

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
      <Provider store={store}>
        <ApolloProvider client={client}>
          <LearningGraphQLContent />
        </ApolloProvider>
      </Provider>
    </>
  );
};
