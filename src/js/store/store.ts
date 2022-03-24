import { configureStore } from '@reduxjs/toolkit';

import { notesReducer } from '../slices/NotesSlice';

import { reHydrateStore } from '../helpers/reHydrateStore';
import { localStorageMiddleWare } from '../helpers/localStorageMiddleWare';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleWare),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
