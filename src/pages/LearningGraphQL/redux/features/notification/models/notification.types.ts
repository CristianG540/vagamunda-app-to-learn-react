import { notificationActions } from '../notification.slice';

//==========
// Actions Types
//==========
export type SetNotificationError = ReturnType<
  typeof notificationActions.setError
>;
