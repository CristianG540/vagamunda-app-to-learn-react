import { OperationVariables, QueryResult, useQuery } from '@apollo/client';
// Models
import { Persona } from '../models/Persona.model';
// Querys
import { ALL_PERSONS } from '../graphql/querys';

interface PersonasData {
  cantidadPersonas: number;
  todasLasPersonas: Persona[];
}

export function useTraerPersonas(): QueryResult<
  PersonasData,
  OperationVariables
> {
  const resultado = useQuery<PersonasData>(ALL_PERSONS);

  return resultado;
}
