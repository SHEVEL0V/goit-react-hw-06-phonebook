import { configureStore } from '@reduxjs/toolkit';
import { items, filter } from './contacts-reduser';

export const store = configureStore({
  reducer: {
    items,
    filter,
  },
});
