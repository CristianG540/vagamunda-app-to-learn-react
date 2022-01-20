import React, { FC } from 'react';
// Components
import { ListaPersonas } from '../../components/ListaPersonas';
import { FormPersonas } from '../../components/FormPersonas';
// Hooks
import { useTraerPersonas } from '../../hooks/personas.hook';

export const LearningGraphQLContent: FC = () => {
  const { data, error, loading } = useTraerPersonas();

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
          <ListaPersonas personas={data?.todasLasPersonas}/>
          <hr />
          <FormPersonas />
        </div>
      )}
    </div>
  );
};
