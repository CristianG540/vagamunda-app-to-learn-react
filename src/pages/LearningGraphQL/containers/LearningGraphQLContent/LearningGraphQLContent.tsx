import React, { FC } from 'react';
// Components
import { ListaPersonas } from '../../components/ListaPersonas';
import { FormPersonas } from '../../components/FormPersonas';
import { Notifier } from '../../components/Notifier';
// Hooks
import { useTraerPersonas } from '../../hooks/personas.hook';
import { useAppSelector } from '../../hooks/reduxToolkitTypedHooks';
import { selectNotificationState } from '../../redux/features/notification/notification.selectors';

export const LearningGraphQLContent: FC = () => {
  const { data, error, loading } = useTraerPersonas();
  const notificationState = useAppSelector(selectNotificationState);

  console.log('🚀 ~ file: LearningGraphQLContent.tsx ~ line 21 ~ result', data);

  if (error) {
    return <span style={{ color: 'red' }}> {error} </span>;
  }

  return (
    <div className="learning-graph-ql-app">
      {notificationState.message && (
        <Notifier
          message={notificationState.message}
          type={notificationState.type}
        />
      )}
      {loading && <p>Cargando...</p>}
      {!loading && (
        <div>
          <p>Hello GraphQL 🐩</p>
          <ListaPersonas personas={data?.todasLasPersonas} />
          <hr />
          <FormPersonas />
        </div>
      )}
    </div>
  );
};
