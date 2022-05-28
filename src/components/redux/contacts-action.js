import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('contacts/addContacts');

export const addValueFilter = createAction('contacts/addValueFilter');

export const removeContacts = createAction('contacts/removeContacts');
