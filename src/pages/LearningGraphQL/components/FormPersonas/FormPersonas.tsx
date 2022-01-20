import React, { FC, FormEvent } from 'react';
import { useMutation } from '@apollo/client';
// Querys
import { ALL_PERSONS } from '../../graphql/querys';
// Mutations
import { AGREGAR_PERSONA } from '../../graphql/mutations';

export const FormPersonas: FC = function () {
  const [agregarPersona, { loading, error }] = useMutation(AGREGAR_PERSONA, {
    refetchQueries: [{ query: ALL_PERSONS }]
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());
    const target = event.target as HTMLFormElement;

    agregarPersona({
      variables: {
        nombre: values.nombre,
        calle: values.calle,
        ciudad: values.ciudad,
        telefono: values.telefono
      }
    });

    console.log(values);
    target.reset();
  };

  if (loading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>Error! ${error}</p>;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="nombre"
          id="nombreInput"
          placeholder="Nombre:"
        />
        <input
          type="text"
          name="telefono"
          id="telefonoInput"
          placeholder="Telefono:"
        />
        <input type="text" name="calle" id="calleInput" placeholder="Calle:" />
        <input
          type="text"
          name="ciudad"
          id="ciudadInput"
          placeholder="Ciudad:"
        />

        <button type="submit">Agregar Persona</button>
      </form>
    </div>
  );
};
