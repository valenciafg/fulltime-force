import { configureStore } from '@reduxjs/toolkit';
import { githubSlice } from './github';

export const store = configureStore({
  reducer: {
    github: githubSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
