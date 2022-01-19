import React, { FC } from 'react';
// Models
import { Persona } from '../../models/Persona.model';

export interface ListaPersonasProps {
  personas?: Persona[];
}

export const ListaPersonas: FC<ListaPersonasProps> = function ({
  personas = []
}) {
  if (personas.length < 1) {
    return null;
  }

  return (
    <div>
      <h2>Personas</h2>
      {personas.map((persona) => (
        <div key={persona.id}>
          {persona.nombre} - {persona.telefono}
        </div>
      ))}
    </div>
  );
};
