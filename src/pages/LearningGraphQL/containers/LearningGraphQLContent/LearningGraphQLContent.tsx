import React, { FC } from 'react';
import { useQuery } from '@apollo/client';

// Components
import { ListaPersonas } from '../../components/ListaPersonas';
import { FormPersonas } from '../../components/FormPersonas';
// Querys
import { ALL_PERSONS } from '../../graphql/querys';

export const LearningGraphQLContent: FC = () => {
  const { data, error, loading } = useQuery(ALL_PERSONS);

  console.log('🚀 ~ file: LearningGraphQLContent.tsx ~ line 21 ~ result', data);

  if (error) {
    return <span style={{ color: 'red' }}> {error} </span>;
  }

  return (
    <div className="learning-graph-ql-app">
      {loading && <p>Cargando...</p>}
      {!loading && (
        <div>
          <p>Hello GraphQL 🐩</p>
          <ListaPersonas personas={data.todasLasPersonas}/>
          <hr />
          <FormPersonas />
        </div>
      )}
    </div>
  );
};
