import React, { FC } from 'react';
import { gql, useQuery } from '@apollo/client';

// Components
import { ListaPersonas } from '../../components/ListaPersonas';

const ALL_PERSONS = gql`
  query {
    cantidadPersonas
    todasLasPersonas(telefono: SI) {
      nombre
      telefono
      direccion {
        calle
        ciudad
      }
      direccionCompleta
    }
  }
`;

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
        </div>
      )}
    </div>
  );
};
