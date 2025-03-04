import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './user/UserSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});