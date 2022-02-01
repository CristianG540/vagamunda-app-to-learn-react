import React, { FC } from 'react';
import { NotificationType } from '../../redux/features/notification/models/notification.interfaces';
// Models
import { NotifierProps } from './Notifier.model';

export const Notifier: FC<NotifierProps> = function ({ message, type }) {
  if (type === NotificationType.Error) {
    return (
      <div style={{ color: 'red', position: 'fixed', top: 0, width: '100%' }}>
        {message}
      </div>
    );
  }

  return (
    <div style={{ position: 'fixed', top: 0, width: '100%' }}>
      {message}
    </div>
  );
};
