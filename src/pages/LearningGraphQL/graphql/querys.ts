import { gql } from '@apollo/client';

export const ALL_PERSONS = gql`
  query {
    cantidadPersonas
    todasLasPersonas {
      id
      nombre
      direccion {
        calle
        ciudad
      }
      telefono
    }
  }
`;

export const BUSCAR_PERSONA = gql`
  query BuscarPersona($nombrePorBuscar: String!) {
    buscarPersona(nombre: $nombrePorBuscar) {
      id
      nombre
      direccion {
        calle
        ciudad
      }
      telefono
    }
  }
`;
