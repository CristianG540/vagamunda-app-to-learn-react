import { gql } from '@apollo/client';

export const AGREGAR_PERSONA = gql`
  mutation AgregarPersona(
    $nombre: String!
    $calle: String!
    $ciudad: String!
    $telefono: String
  ) {
    agregarPersona(
      nombre: $nombre
      calle: $calle
      ciudad: $ciudad
      telefono: $telefono
    ) {
      nombre
      telefono
      direccion {
        calle
        ciudad
      }
      id
    }
  }
`;
