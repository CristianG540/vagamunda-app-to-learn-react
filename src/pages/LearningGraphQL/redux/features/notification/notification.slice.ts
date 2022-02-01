import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Models
import {
  NotificationState,
  NotificationType
} from './models/notification.interfaces';

//==========
// Slice
//==========
export const initialState: NotificationState = {
  message: ''
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
      state.type = NotificationType.Error;
    }
  }
});

//==========
// Reducer
//==========
export const notificationReducer = notificationSlice.reducer;

//==========
// Actions
//==========
export const notificationActions = notificationSlice.actions;
