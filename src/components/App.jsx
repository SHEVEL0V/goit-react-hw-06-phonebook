import React, { useEffect } from 'react';
import Container from './container/container';
import Form from './form/form';
import ContactsList from './contactsList/contactsList';
import Filter from './filterContacts/filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContacts,
  removeContacts,
  addValueFilter,
} from './redux/contacts-action';

export default function App() {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem(
      'contactsList',
      JSON.stringify(contacts),
    );
  }, [contacts]);

  const addValidContacts = value => {
    if (
      contacts.every(
        e => e.name.toLowerCase() !== value.name.toLowerCase(),
      )
    ) {
      dispatch(addContacts(value));
    } else {
      alert(`"${value.name}" is already in contact!`);
    }
  };

  const onInputFilter = value => {
    dispatch(addValueFilter(value.trim()));
  };

  const filterVisibleEl = () => {
    const filterLowCace = filter.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filterLowCace),
    );
  };

  return (
    <Container>
      <div>
        <Form addValidContacts={addValidContacts} />
        <Filter onInputFilter={onInputFilter} value={filter} />
      </div>
      <ContactsList
        contacts={filterVisibleEl()}
        removeContacs={value => dispatch(removeContacts(value))}
      />
    </Container>
  );
}
