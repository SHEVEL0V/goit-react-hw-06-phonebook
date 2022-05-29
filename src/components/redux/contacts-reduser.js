import { createReducer } from '@reduxjs/toolkit';
import {
  addContacts,
  addValueFilter,
  removeContacts,
} from './contacts-action';

const getContacts = () => {
  const contacts = JSON.parse(
    window.localStorage.getItem('contactsList'),
  );
  return contacts ? contacts : [];
};

export const items = createReducer(getContacts, {
  [addContacts]: (state, action) => [...state, action.payload],
  [removeContacts]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

export const filter = createReducer('', {
  [addValueFilter]: (state, { payload }) => payload,
});
