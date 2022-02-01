/**
 * Se importan los reducers de cada uno de los slices, y despues se exportan
 * como un solo objeto que va a representar el reducer principal, este reducer
 * principal es el que se utiliza mas adelante para configurar el store en el
 * archivo /redux/configureStore.ts
 */
import { notificationReducer as notification } from '../features/notification/notification.slice';

export const rootReducer = {
  notification
};
