import React from 'react';
import Container from './components/container/container';
import Form from './components/form/form';
import ContactsList from './components/contactsList/contactsList';
import Filter from './components/filter/filter';

export default function App() {
  return (
    <Container>
      <div>
        <Form />
        <Filter />
      </div>
      <ContactsList />
    </Container>
  );
}
