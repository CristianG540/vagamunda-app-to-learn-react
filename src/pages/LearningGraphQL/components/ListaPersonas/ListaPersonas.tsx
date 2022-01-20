import React, { FC, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

// Models
import { Persona } from '../../models/Persona.model';
// Querys
import { BUSCAR_PERSONA } from '../../graphql/querys';
export interface ListaPersonasProps {
  personas?: Persona[];
}

export const ListaPersonas: FC<ListaPersonasProps> = function ({
  personas = []
}) {
  const [recuperPersona, { loading, error, data }] =
    useLazyQuery(BUSCAR_PERSONA);
  const [detallePersonaIsOpen, setDetallePersonaState] = useState(false);

  const onClickPersona = (nombrePersona: string) => {
    recuperPersona({ variables: { nombrePorBuscar: nombrePersona } });
    setDetallePersonaState(true);
  };
  const onClickCerrarDetallePersona = () => {
    setDetallePersonaState(false);
  };

  if (personas.length < 1) {
    return null;
  }
  if (loading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>Error! ${error}</p>;
  }
  if (data?.buscarPersona && detallePersonaIsOpen) {
    const persona = data.buscarPersona;

    return (
      <div>
        <h2>{persona.nombre}</h2>
        <div>
          {persona.direccion.calle} - {persona.direccion.ciudad}
        </div>
        <div>{persona.telefono}</div>
        <button onClick={onClickCerrarDetallePersona}>Cerrar</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Personas</h2>
      {personas.map((persona) => (
        <div key={persona.id} onClick={() => onClickPersona(persona.nombre)}>
          {persona.nombre} - {persona.telefono}
        </div>
      ))}
    </div>
  );
};
